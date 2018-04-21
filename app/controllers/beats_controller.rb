class BeatsController < ApplicationController
	def index
		@song = Song.find(params[:song_id])
		@beats = @song.beats
		render json: {
			message: "beat_merp",
			beats: @beats
		}
	end

	def create
		@beat = Beat.new(beat_params)
		@beat.save
		render json: {
			message: "beat_blah",
			beat: @beat
		}
	end

	private

	def beat_params
		params.permit(:instrument,:instrument_id,:bits,:song_id)
	end

end
