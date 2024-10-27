from flask_login import UserMixin
from .. import db  # Relative import
from datetime import datetime
from zoneinfo import ZoneInfo
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.orm import relationship
from sqlalchemy import func
from werkzeug.security import generate_password_hash, check_password_hash
from .volunteer_match import VolunteerMatch  # Add this import

class Volunteer(db.Model, UserMixin):
    __tablename__ = 'volunteer'  # Ensure this matches your actual table name

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)  # Renamed from 'password' to 'password_hash'
    name = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(20))
    profile_picture = db.Column(db.String(200))  # URL to profile picture
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(ZoneInfo("Asia/Kolkata")))
    
    # Volunteer-specific fields
    skills = db.Column(ARRAY(db.String(50)))  # Array of skills
    availability = db.Column(db.JSON)  # JSON object for flexible availability storage
    profile_urls = db.Column(db.JSON)  # JSON object for various profile URLs
    bio = db.Column(db.Text)
    rating = db.Column(db.Float)
    
    # Relationships
    matches = relationship("VolunteerMatch", back_populates="volunteer")
    
    def __repr__(self):
        return f'<Volunteer {self.email}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'name': self.name,
            'phone_number': self.phone_number,
            'profile_picture': self.profile_picture,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'skills': self.skills,
            'availability': self.availability,
            'profile_urls': self.profile_urls,
            'bio': self.bio,
            'rating': self.rating
        }
    
    def set_password(self, password):
        """Hash and set the user's password."""
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        """Check if the provided password matches the stored hash."""
        return check_password_hash(self.password_hash, password)
    
    def update_average_rating(self):
        # This method can now use VolunteerMatch
        avg_rating = db.session.query(func.avg(VolunteerMatch.volunteer_rating)).filter(VolunteerMatch.volunteer_id == self.id).scalar()
        self.rating = avg_rating
        db.session.commit()
    
    @classmethod
    def get_volunteers_with_ratings(cls):
        return cls.query.filter(cls.rating.isnot(None)).all()
    
    @property
    def role(self):
        return 'volunteer'
