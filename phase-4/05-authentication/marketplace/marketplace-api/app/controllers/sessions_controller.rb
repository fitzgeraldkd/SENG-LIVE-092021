class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticated(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: "Invalid credentials.", status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
  end

end
