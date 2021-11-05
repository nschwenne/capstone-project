class AddCahracterHistoryToCharacter < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :background, :string, :default => ""
    add_column :characters, :race, :string, :default => ""
    add_column :characters, :alignment, :string, :default => ""
    add_column :characters, :experience, :string, :default => ""
  end
end
