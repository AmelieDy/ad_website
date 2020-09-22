class CreateTags < ActiveRecord::Migration[6.0]
  def change
    create_table :tags, id: false do |t|
      t.belongs_to :skill, index: true
      t.belongs_to :experience, index: true
    end
  end
end
