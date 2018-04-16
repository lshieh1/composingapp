class RemoveColumnsFromSongs < ActiveRecord::Migration[5.1]
  def change
  	remove_column :songs, :notes, :string
  	remove_column :songs, :pattern, :string
  	remove_column :songs, :instrument, :string
  end
end
