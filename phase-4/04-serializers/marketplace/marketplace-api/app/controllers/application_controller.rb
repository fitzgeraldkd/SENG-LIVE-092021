class ApplicationController < ActionController::API
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    private 

    def current_user 
        User.find_by(username: "aisayo")
    end

    # looking for a record that does not exist 
    def record_not_found(errors)
        render json: errors.message, status: :not_found
    end

    # making sure that validations are met 
    def invalid_record(invalid)
        render json: invalid.record.errors, status: :unprocessable_entity
    end
end