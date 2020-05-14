class Api::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)

        if @user.save
        login(@user)
        render "api/users/show"
        else
        render json: @user.errors.full_messages, status: 422
        end
    end 
    

    def index 
        @user = User.where(id: currentUser)
        if @user 
            render :index 
        else
            render json: ['Not found!'], status: 404
        end
    end 

    def update
        @user = User.where(id: params[:id])
        new_cash = params[:available_cash]
        @user.update(available_cash: new_cash)
        render :show
    end

    private 
    def user_params
        # params.require(:user).permit(:email, :password, :first_name, :last_name)
        params.require(:user).permit(:email, :password, :first_name, :last_name, :id, :available_cash)
    end
end 