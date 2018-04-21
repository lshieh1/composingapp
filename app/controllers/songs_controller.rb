class SongsController < ApplicationController
	before_action :set_song, only: [:show,:update,:destroy]
	def index
		@songs = Song.all
		render json: {
			message: "merp",
			songs: @songs
		}
	end

	def show
		render json: {
			message: "hehe",
			song: @song
		}
	end

	def create
		@song = Song.new(song_params)
		@song.save
		render json: {
			message: "blah",
			song: @song
		}
	end

	def update
		@song.update(song_params)
		render json: {
			message: "hihi",
			song: @song
		}
	end

	def destroy
		@song.delete
		render json: {
			message: "deleted"
		}
	end

	private

	def song_params
		params.permit(:title,:created_by,:recently_edited_by)
	end

	def set_song
		@song = Song.find(params[:id])
	end
end
