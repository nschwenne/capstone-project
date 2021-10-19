class Character < ApplicationRecord
    belongs_to :user
    validates :name, presence: true
    validates :klass, presence: true
    validates :level, presence: true
   
end
