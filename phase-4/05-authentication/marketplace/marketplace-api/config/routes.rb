Rails.application.routes.draw do
  resources :items, only: [:index, :show, :create, :update]
  resources :users, only: [:index, :show, :create, :destroy]
  resources :categories, only: [:index, :show]
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
