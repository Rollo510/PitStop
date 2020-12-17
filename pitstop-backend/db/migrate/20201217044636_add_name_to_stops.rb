class AddNameToStops < ActiveRecord::Migration[6.0]
  def change
    add_column :stops, :name, :string
  end
end
