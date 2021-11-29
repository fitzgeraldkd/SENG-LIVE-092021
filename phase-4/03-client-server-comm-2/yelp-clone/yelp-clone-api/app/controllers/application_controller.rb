class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

private

    def current_user
        User.last
    end

    def record_not_found(errors)
        render json: errors
    end

    def record_invalid(invalid)
        render json: invalid.record.errors.full_messages
    end
end
