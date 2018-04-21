class AddInstrumentToSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :instrument, :string
  end
end
