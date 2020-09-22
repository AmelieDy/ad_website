class AddPriorityToSkills < ActiveRecord::Migration[6.0]
  def change
    add_column :skills, :priority, :integer
  end
end
