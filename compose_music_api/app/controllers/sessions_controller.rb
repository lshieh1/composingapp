class SessionsController < ApplicationController
	def new
		
	end

	def create
		@user = User.find_by_email(params[:email])
		if @user && @user.authenticate(params[:password])
			session[:user_id] = user.id
			render json: @user, status: :created, location: @user
		else
			render json: @user.errors, status: :unprocessable_entity
		end
		
	end

	def destroy
		session[:user_id] = nil
	end
end