class Stop < ApplicationRecord
  belongs_to :trip
  belongs_to :user
end
