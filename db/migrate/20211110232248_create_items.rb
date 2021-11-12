class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :cost
      t.string :description
      t.integer :weight
      t.timestamps
    end
  end
end
