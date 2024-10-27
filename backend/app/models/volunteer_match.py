from .. import db
from datetime import datetime
from sqlalchemy.orm import relationship

class VolunteerMatch(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    volunteer_id = db.Column(db.Integer, db.ForeignKey('volunteer.id'), nullable=False)
    opportunity_id = db.Column(db.Integer, db.ForeignKey('opportunity.id'), nullable=False)
    status = db.Column(db.String(20))  # 'applied', 'accepted', 'rejected', 'completed'
    applied_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    volunteer_review = db.Column(db.Text)
    volunteer_rating = db.Column(db.Float)
    organization_review = db.Column(db.Text)
    organization_rating = db.Column(db.Float)

    # Relationships
    volunteer = relationship("Volunteer", back_populates="matches")
    opportunity = relationship("Opportunity", back_populates="matches")

    def __repr__(self):
        return f'<VolunteerMatch {self.volunteer_id} - {self.opportunity_id}>'
