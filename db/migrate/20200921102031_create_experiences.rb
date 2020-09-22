class CreateExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :experiences do |t|
      t.string      :location
      t.datetime    :start_date
      t.datetime    :end_date
      t.string      :title
      t.text        :description
      t.boolean     :experience_type, default: 0
    end
  end
end
