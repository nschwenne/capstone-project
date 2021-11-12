class CreateInventories < ActiveRecord::Migration[6.1]
  def change
    create_table :inventories do |t|
      t.integer :character_id
      t.integer :item_id
      t.timestamps
    end
  end
end
