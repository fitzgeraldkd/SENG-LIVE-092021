class BusinessesController < ApplicationController
  def index
    businesses = Business.all
    render json: businesses
  end

  def show
    business = Business.find_by(id: params[:id])
    if business
      render json: business
    else
      render json: { error: "Business not found" }, status: :not_found
    end
  end
end
