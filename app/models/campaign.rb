class Campaign < ApplicationRecord
    belongs_to :user
    has_many :characters
    validates :name, presence: true
    validates :setting, presence: true
    
end
