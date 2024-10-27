from flask_login import UserMixin
from .. import db  # Relative import
from datetime import datetime
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import ARRAY
from werkzeug.security import generate_password_hash, check_password_hash

class Organization(db.Model, UserMixin):
    __tablename__ = 'organization'  # Ensure this matches your actual table name

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)  # Ensure autoincrement=True
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)  # Renamed from 'password' to 'password_hash'
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Organization-specific fields
    org_name = db.Column(db.String(100), nullable=False)
    org_url = db.Column(db.String(200))
    description = db.Column(db.Text)
    profile_urls = db.Column(db.JSON)  # JSON object for various profile URLs
    contact_name = db.Column(db.String(100))  # Name of the contact person
    contact_email = db.Column(db.String(120))  # Email of the contact person
    org_type = db.Column(db.String(50))
    cause_categories = db.Column(ARRAY(db.String(50)))  # Array of cause categories

    # Relationships
    opportunities = relationship("Opportunity", back_populates="organization")

    def __repr__(self):
        return f'<Organization {self.email}>'

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'org_name': self.org_name,
            'org_url': self.org_url,
            'description': self.description,
            'profile_urls': self.profile_urls,
            'contact_name': self.contact_name,
            'contact_email': self.contact_email,
            'org_type': self.org_type,
            'cause_categories': self.cause_categories,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }

    def set_password(self, password):
        """Hash and set the organization's password."""
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        """Check if the provided password matches the stored hash."""
        return check_password_hash(self.password_hash, password)

    @property
    def role(self):
        return 'organization'
