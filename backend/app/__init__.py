# app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from flask_cors import CORS
from flask_login import LoginManager  # Import LoginManager

db = SQLAlchemy()
migrate = Migrate()
login_manager = LoginManager()  # Instantiate LoginManager

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)

    # Initialize LoginManager
    login_manager.init_app(app)
    login_manager.login_view = 'auth.login'  # Redirect users to 'auth.login' when login is required

    # Define user_loader callback
    @login_manager.user_loader
    def load_user(user_id):
        """
        This callback is used to reload the user object from the user ID stored in the session.
        It attempts to load the user first as a Volunteer, then as an Organization.
        """
        try:
            # Attempt to convert user_id to integer
            user_id = int(user_id)
        except ValueError:
            return None

        # Import models within the app context to avoid circular imports
        from .models.volunteer import Volunteer
        from .models.organization import Organization

        # Try to load as Volunteer
        user = Volunteer.query.get(user_id)
        if user:
            return user

        # Try to load as Organization
        return Organization.query.get(user_id)

    # Set up CORS
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

    with app.app_context():
        from .routes import auth, main_routes  # Import your blueprints
        app.register_blueprint(auth.auth)
        app.register_blueprint(main_routes.bp)

    return app

# Ensure to export db here if needed elsewhere
from app import db
