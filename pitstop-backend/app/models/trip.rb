class Trip < ApplicationRecord
    has_many :stops
    has_many :users, through: :stops
end
