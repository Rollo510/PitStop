class AddPositionAndReviewToStops < ActiveRecord::Migration[6.0]
  def change
    add_column :stops, :position, :string
    add_column :stops, :review, :text
  end
end
