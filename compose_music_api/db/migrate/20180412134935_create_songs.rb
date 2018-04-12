class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
    	t.string :title
    	t.string :notes
    	t.string :pattern
    	t.string :created_by
    	t.string :recently_edited_by
     	t.timestamps
    end
  end
end
