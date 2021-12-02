class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created 
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity    
    end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: "You are not logged in", status: :unauthorized
        end
    end

    private

    def user_params 
        params.permit(:username, :email, :password, :password_confirmation)
    end
end
