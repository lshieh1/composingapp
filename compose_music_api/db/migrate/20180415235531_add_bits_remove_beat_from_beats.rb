class AddBitsRemoveBeatFromBeats < ActiveRecord::Migration[5.1]
  def change
  	add_column :beats, :bits, :string, default: "0000000000000000"
  	remove_column :beats, :beat_1, :boolean 
  	remove_column :beats, :beat_2, :boolean 
  	remove_column :beats, :beat_3, :boolean 
  	remove_column :beats, :beat_4, :boolean 
  	remove_column :beats, :beat_5, :boolean 
  	remove_column :beats, :beat_6, :boolean 
  	remove_column :beats, :beat_7, :boolean 
  	remove_column :beats, :beat_8, :boolean 
  	remove_column :beats, :beat_9, :boolean 
  	remove_column :beats, :beat_10, :boolean 
  	remove_column :beats, :beat_11, :boolean 
  	remove_column :beats, :beat_12, :boolean 
  	remove_column :beats, :beat_13, :boolean 
  	remove_column :beats, :beat_14, :boolean 
  	remove_column :beats, :beat_15, :boolean 
  	remove_column :beats, :beat_16, :boolean 
  end
end
