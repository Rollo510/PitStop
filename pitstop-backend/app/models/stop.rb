class Stop < ApplicationRecord
  belongs_to :trip
  belongs_to :user
  validates_presence_of :name, :lat, :lng
end
