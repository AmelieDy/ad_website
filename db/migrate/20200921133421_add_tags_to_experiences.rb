class AddTagsToExperiences < ActiveRecord::Migration[6.0]
  def change
    add_column :experiences, :tags, :integer
  end
end
