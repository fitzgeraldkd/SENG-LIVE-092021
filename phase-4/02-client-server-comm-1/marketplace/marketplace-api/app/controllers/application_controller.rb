class ApplicationController < ActionController::API

  private

  def current_user
    User.find_by_username("aisayo")
  end
end
