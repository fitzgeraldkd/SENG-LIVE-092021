class ReviewsController < ApplicationController

  def create
    
  end

  private

  def review_params
    params.permit(:content)
  end
end