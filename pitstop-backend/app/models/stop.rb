class Stop < ApplicationRecord
  belongs_to :trip
  belongs_to :user
  validates_uniqueness_of :name
  
end
