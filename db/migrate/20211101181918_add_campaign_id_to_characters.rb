class AddCampaignIdToCharacters < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :campaign_id, :integer
  end
end
