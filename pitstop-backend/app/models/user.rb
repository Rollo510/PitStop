class User < ApplicationRecord
  has_many :stops
  has_many :trips, through: :stops
  has_secure_password

end
