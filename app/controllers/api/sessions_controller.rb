class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid Username/Password"], status: 422
    end
  end

  def destroy
    if logged_in?
      log_out
      render json: {}
    else
      render json: ["Not signed in!"], status: 404
    end
  end

end