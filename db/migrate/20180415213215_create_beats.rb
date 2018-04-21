class CreateBeats < ActiveRecord::Migration[5.1]
  def change
    create_table :beats do |t|
    	t.string :instrument
    	t.boolean :beat_1, default: false
    	t.boolean :beat_2, default: false
    	t.boolean :beat_3, default: false
    	t.boolean :beat_4, default: false
    	t.boolean :beat_5, default: false
    	t.boolean :beat_6, default: false
    	t.boolean :beat_7, default: false
    	t.boolean :beat_8, default: false
    	t.boolean :beat_9, default: false
    	t.boolean :beat_10, default: false
    	t.boolean :beat_11, default: false
    	t.boolean :beat_12, default: false
    	t.boolean :beat_13, default: false
    	t.boolean :beat_14, default: false
    	t.boolean :beat_15, default: false
    	t.boolean :beat_16, default: false
      	t.timestamps
    end
  end
end
