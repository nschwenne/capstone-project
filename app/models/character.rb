class Character < ApplicationRecord
    validates :name, presence: true
    validates :klass, presence: true
    validates :level, presence: true
   belongs_to :user
end
