class Trip < ApplicationRecord
    has_many :stops
    has_many :users, through: :stops
    validates_presence_of :name
    validates_uniqueness_of :name
end
