class Skill < ApplicationRecord
  has_many :tags
  has_many :experiences, through: :tags
  enum category: %i[language framework other]
end
