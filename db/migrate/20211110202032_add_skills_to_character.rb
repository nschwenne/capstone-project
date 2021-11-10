class AddSkillsToCharacter < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :str_saving, :integer
    add_column :characters, :athletics, :integer
    add_column :characters, :dex_saving, :integer
    add_column :characters, :acrobatics, :integer
    add_column :characters, :sleight_of_hand, :integer
    add_column :characters, :stealth, :integer
    add_column :characters, :con_saving, :integer
    add_column :characters, :int_saving, :integer
    add_column :characters, :arcana, :integer
    add_column :characters, :history, :integer
    add_column :characters, :investigation, :integer
    add_column :characters, :nature, :integer
    add_column :characters, :religion, :integer
    add_column :characters, :wis_saving, :integer
    add_column :characters, :animal_handling, :integer
    add_column :characters, :insight, :integer
    add_column :characters, :medicine, :integer
    add_column :characters, :perception, :integer
    add_column :characters, :survival, :integer
    add_column :characters, :cha_saving, :integer
    add_column :characters, :deception, :integer
    add_column :characters, :intimidation, :integer
    add_column :characters, :performance, :integer
    add_column :characters, :persuasion, :integer
  end
end
