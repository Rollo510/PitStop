class User < ApplicationRecord
  has_many :stops
  has_many :trips, through: :stops
  validates_presence_of :username
end
