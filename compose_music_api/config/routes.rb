Rails.application.routes.draw do
	resources :songs, path: 'api/songs'
end
