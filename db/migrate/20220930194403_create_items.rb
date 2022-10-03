class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :item_type
      t.string :character_type
      t.string :image
      t.string :effect
      t.string :stats
      t.integer :cost
    end
  end
end
