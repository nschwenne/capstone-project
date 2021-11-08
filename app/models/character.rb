class Character < ApplicationRecord
    belongs_to :user
    validates :name, presence: true
    validates :campaign_id, presence: true
   
end
