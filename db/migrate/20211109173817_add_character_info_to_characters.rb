class AddCharacterInfoToCharacters < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :temporary_hit_points, :integer
    add_column :characters, :current_hit_points, :integer
    add_column :characters, :hit_point_maximum, :integer
    add_column :characters, :speed, :integer
    add_column :characters, :initiative, :integer
    add_column :characters, :armor_class, :integer
    add_column :characters, :hit_dice, :integer

  end
end
