class Experience < ApplicationRecord
  has_many :tags
  has_many :skills, through: :tags
  enum experience_type: %i[work education]

  scope :work,      -> { where('experience_type', 0) }
  scope :education, -> { where('experience_type', 1) }
end
