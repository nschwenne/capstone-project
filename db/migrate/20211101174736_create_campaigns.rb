class CreateCampaigns < ActiveRecord::Migration[6.1]
  def change
    create_table :campaigns do |t|
      t.string :name
      t.text :description
      t.string :setting
      t.integer :user_id

      t.timestamps
    end
  end
end
