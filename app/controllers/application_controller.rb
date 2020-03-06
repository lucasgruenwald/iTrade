class ApplicationController < ActionController::Base
    
    skip_before_action :verify_authenticity_token
    helper_method :logged_in?, :current_user

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_login
        redirect_to api_session_url unless logged_in?
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
    end

    def logged_in?
        !!current_user
    end

    def log_out
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

end
