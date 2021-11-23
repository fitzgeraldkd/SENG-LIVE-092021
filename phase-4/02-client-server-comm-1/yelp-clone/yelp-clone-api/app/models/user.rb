class User < ApplicationRecord
    has_many :reviews 
    has_many :businesses, through: :reviews

    validates :username, :email, uniqueness: true
end
