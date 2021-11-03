class AddCahracterHistoryToCharacter < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :background, :string
    add_column :characters, :race, :string
    add_column :characters, :alignment, :string
    add_column :characters, :experience, :string
  end
end
