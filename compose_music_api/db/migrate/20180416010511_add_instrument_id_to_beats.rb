class AddInstrumentIdToBeats < ActiveRecord::Migration[5.1]
  def change
  	add_column :beats, :instrument_id, :integer
  end
end
