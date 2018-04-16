class AddIndexToBeats < ActiveRecord::Migration[5.1]
  def change
  	add_index :beats, :song_id
  end
end
