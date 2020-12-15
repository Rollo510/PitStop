class User < ApplicationRecord
  has_many :stops
  has_many :trips, through: :stops

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable
end
