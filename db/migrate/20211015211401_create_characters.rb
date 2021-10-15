class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :klass
      t.integer :level

      t.timestamps
    end
  end
end
