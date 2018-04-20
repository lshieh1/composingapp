Rails.application.routes.draw do
  resources :songs, path: 'api/songs' do 
    resources :beats
  end
end
