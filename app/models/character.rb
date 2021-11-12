class Character < ApplicationRecord
    belongs_to :user
    has_many :inventories
    has_many :items, through: :inventories
    validates :name, presence: true
    validates :campaign_id, presence: true
   
end
