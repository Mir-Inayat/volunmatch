# app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from flask_cors import CORS
from flask_login import LoginManager

db = SQLAlchemy()
migrate = Migrate()
login_manager = LoginManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)

    # Initialize LoginManager
    login_manager.init_app(app)
    login_manager.login_view = 'auth.volunteer_login'  # Set to the volunteer login route

    # Define user_loader callback
    @login_manager.user_loader
    def load_user(user_id):
        try:
            user_id = int(user_id)
        except ValueError:
            return None

        from .models.volunteer import Volunteer
        from .models.organization import Organization

        user = Volunteer.query.get(user_id)
        if user:
            return user
        return Organization.query.get(user_id)

    # Set up CORS with credentials support
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)

    with app.app_context():
        from .routes import auth, main_routes
        app.register_blueprint(auth.auth)
        app.register_blueprint(main_routes.bp)

    return app

# Ensure to export db here if needed elsewhere
from app import db
