from flask import Blueprint, request, jsonify
from flask_login import login_user, logout_user, login_required
from app.models.volunteer import Volunteer
from app.models.organization import Organization
from app import db
from sqlalchemy.exc import IntegrityError

auth = Blueprint('auth', __name__)

@auth.route('/api/login/volunteer', methods=['POST'])
def volunteer_login():
    data = request.get_json()
    if not data:
        return jsonify({"message": "No input data provided"}), 400

    email = data.get('email')
    password = data.get('password')

    # Validate required fields
    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    # Retrieve the volunteer by email
    volunteer = Volunteer.query.filter_by(email=email).first()
    if volunteer and volunteer.check_password(password):
        login_user(volunteer)
        return jsonify({
            "message": "Volunteer logged in successfully",
            "user": volunteer.to_dict()
        }), 200

    return jsonify({"message": "Invalid email or password"}), 401


@auth.route('/api/login/organization', methods=['POST'])
def organization_login():
    data = request.get_json()
    if not data:
        return jsonify({"message": "No input data provided"}), 400

    email = data.get('email')
    password = data.get('password')

    # Validate required fields
    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    # Retrieve the organization by email
    organization = Organization.query.filter_by(email=email).first()
    if organization and organization.check_password(password):
        login_user(organization)
        return jsonify({
            "message": "Organization logged in successfully",
            "user": organization.to_dict()
        }), 200

    return jsonify({"message": "Invalid email or password"}), 401


@auth.route('/api/logout', methods=['POST'])
def logout():
    logout_user()
    return jsonify({"message": "Logged out successfully"}), 200

@auth.route('/api/volunteer/signup', methods=['POST'])
def volunteer_signup():
    data = request.json
    email = data.get('email')
    if Volunteer.query.filter_by(email=email).first():
        return jsonify({"message": "Email already registered"}), 400
    
    # Validate required fields
    required_fields = ['email', 'password', 'name']
    for field in required_fields:
        if field not in data or not data.get(field):
            return jsonify({"message": f"'{field}' is a required field"}), 400
    
    new_volunteer = Volunteer(
        email=email,
        name=data['name'],
        phone_number=data.get('phone_number'),
        profile_picture=data.get('profile_picture'),
        skills=data.get('skills', []),
        availability=data.get('availability', {}),
        profile_urls=data.get('profile_urls', {}),
        bio=data.get('bio', '')
    )
    
    new_volunteer.set_password(data['password'])
    db.session.add(new_volunteer)
    db.session.commit()
    
    login_user(new_volunteer)
    return jsonify({"message": "Volunteer registered successfully", "user": new_volunteer.to_dict()}), 201

@auth.route('/api/organization/signup', methods=['POST'])
def organization_signup():
    data = request.json
    email = data.get('email')
    if Organization.query.filter_by(email=email).first():
        return jsonify({"message": "Email already registered"}), 400
    
    # Validate required fields
    required_fields = ['email', 'password', 'org_name']
    for field in required_fields:
        if field not in data or not data.get(field):
            return jsonify({"message": f"'{field}' is a required field"}), 400
    
    new_organization = Organization(
        email=email,
        org_name=data['org_name'],
        org_url=data.get('org_url'),
        description=data.get('description'),
        profile_urls=data.get('profile_urls', {}),
        contact_name=data.get('contact_name'),
        contact_email=data.get('contact_email'),
        org_type=data.get('org_type'),
        cause_categories=data.get('cause_categories', [])
    )
    
    new_organization.set_password(data['password'])
    db.session.add(new_organization)
    db.session.commit()
    
    login_user(new_organization)
    return jsonify({"message": "Organization registered successfully", "user": new_organization.to_dict()}), 201
