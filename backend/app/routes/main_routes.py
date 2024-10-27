from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
# Removed the User import since it's no longer used
# from app.models.User import User  
from app.models.volunteer import Volunteer
from app.models.organization import Organization
from app.models.opportunity import Opportunity
from app.models.volunteer_match import VolunteerMatch
from app.services.recommendation import VolunteerRecommendationSystem
from app import db

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    return "Welcome to VolunMatch!"

@bp.route('/api/recommendations', methods=['GET'])
@login_required
def get_recommendations():
    if current_user.role != 'volunteer':
        return jsonify({"error": "Only volunteers can get recommendations"}), 403

    opportunity_id = request.args.get('opportunity_id', type=int)
    if not opportunity_id:
        return jsonify({"error": "Opportunity ID is required"}), 400

    recommender = VolunteerRecommendationSystem()
    try:
        recommender.fetch_data()
        recommender.preprocess_data()
        recommender.train_content_based_model()
        recommender.train_collaborative_model()

        recommendations = recommender.get_hybrid_recommendations(current_user.id, opportunity_id, top_n=5)
        return jsonify(recommendations)
    except Exception as e:
        return jsonify({"error": "Unable to generate recommendations", "details": str(e)}), 500

@bp.route('/api/profile', methods=['GET'])
def profile():
    # Hardcoded user data for a volunteer
    user_data = {
        "user": {
            "id": 1,
            "email": "volunteer@example.com",
            "name": "John Doe",
            "phone_number": "+1234567890",
            "profile_picture": "http://example.com/profile.jpg",
            "created_at": "2024-10-27T02:52:20",
            "skills": ["coding", "design", "communication"],
            "availability": {
                "monday": {"morning": True, "afternoon": False, "evening": True},
                "tuesday": {"morning": False, "afternoon": True, "evening": False},
                # Add other days as needed
            },
            "profile_urls": {
                "linkedin": "https://www.linkedin.com/in/johndoe",
                "github": "https://github.com/johndoe"
            },
            "bio": "I'm a passionate volunteer with experience in...",
            "rating": 4.5
        }
    }

    return jsonify(user_data), 200

@bp.route('/api/billing', methods=['GET'])
def billing():
    # Hardcoded user data for an organization
    user_data = {
        "user": {
            "id": 1,
            "email": "org@example.com",
            "org_name": "Example Nonprofit",
            "org_url": "https://www.examplenonprofit.org",
            "description": "We are dedicated to...",
            "profile_urls": {
                "facebook": "https://www.facebook.com/examplenonprofit",
                "twitter": "https://twitter.com/examplenonprofit"
            },
            "contact_name": "Jane Smith",
            "contact_email": "contact@examplenonprofit.org",
            "org_type": "Environmental",
            "cause_categories": ["Conservation", "Education"],
            "created_at": "2024-10-27T02:52:20"
        }
    }

    return jsonify(user_data), 200

@bp.route('/api/opportunities', methods=['GET'])
def get_opportunities():
    opportunities = Opportunity.query.all()
    return jsonify([opp.to_dict() for opp in opportunities])

@bp.route('/api/opportunity', methods=['POST'])
@login_required
def create_opportunity():
    if current_user.role != 'organization':
        return jsonify({"error": "Only organizations can create opportunities"}), 403
    
    data = request.json
    # Validate required fields
    required_fields = ['title', 'description']
    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"'{field}' is a required field"}), 400

    new_opportunity = Opportunity(
        organization_id=current_user.id,
        title=data['title'],
        description=data['description'],
        required_skills=data.get('required_skills', []),
        location=data.get('location', ''),
        duration_type=data.get('duration_type', ''),
        opportunity_type=data.get('opportunity_type', ''),
        min_volunteers=data.get('min_volunteers'),
        max_volunteers=data.get('max_volunteers'),
        start_date=data.get('start_date'),
        end_date=data.get('end_date')
    )
    try:
        db.session.add(new_opportunity)
        db.session.commit()
        return jsonify(new_opportunity.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "An error occurred while creating the opportunity", "details": str(e)}), 500

@bp.route('/api/volunteer_rating', methods=['POST'])
@login_required
def update_volunteer_rating():
    if current_user.role != 'organization':
        return jsonify({"error": "Only organizations can rate volunteers"}), 403

    data = request.json
    # Validate required fields
    required_fields = ['match_id', 'rating']
    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"'{field}' is a required field"}), 400

    volunteer_match = VolunteerMatch.query.get(data['match_id'])
    
    if not volunteer_match:
        return jsonify({"error": "Volunteer match not found"}), 404

    # Ensure the organization owns the opportunity related to this match
    if volunteer_match.opportunity.organization_id != current_user.id:
        return jsonify({"error": "You do not have permission to rate this volunteer"}), 403

    # Update ratings and reviews
    volunteer_match.volunteer_rating = data['rating']
    volunteer_match.organization_review = data.get('review', '')
    db.session.commit()

    # Update the volunteer's average rating
    volunteer = Volunteer.query.get(volunteer_match.volunteer_id)
    if volunteer:
        volunteer.update_average_rating()
    else:
        return jsonify({"error": "Volunteer not found"}), 404

    return jsonify({"message": "Volunteer rating updated successfully"}), 200

# Add more routes as needed
# This route is no longer required and has been removed.
