class AddLocationAndReviewToStops < ActiveRecord::Migration[6.0]
  def change
    add_column :stops, :location, :string
    add_column :stops, :review, :text
  end
end
