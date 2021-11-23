class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: items, except: [:created_at, :updated_at]
    end

    def show 
        item = Item.find_by(id: params[:id])
        if item 
            render json: item 
        else 
            render json: { error: "Item does not exist" }, status: :not_found
        end
    end

    # POST /items
    def create
        item = current_user.sold_items.create!(item_params)
        render json: item, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { error: invalid.errors.full_messages }, status: :unprocessable_entity
    end

    private

    def item_params
        params.permit(:name, :desc, :price)
    end
end
