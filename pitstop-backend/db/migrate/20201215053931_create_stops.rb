class CreateStops < ActiveRecord::Migration[6.0]
  def change
    create_table :stops do |t|
      t.references :trip, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
