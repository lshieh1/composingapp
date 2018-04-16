class AddSongIdColumnToBeats < ActiveRecord::Migration[5.1]
  def change
  	add_column :beats, :song_id, :integer
  end
end
