class ReviewsController < ApplicationController

    def create
        review = current_user.reviews.create!(review_params)
        render json: review, status: :created 
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity    
    end

    def update
        review = find_review
        review.update(review_params)
        render json: review, status: :ok
    end

    private 

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params[:business_id] = Business.first.id
        params.permit(:content, :business_id)
    end
end
