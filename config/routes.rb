Rails.application.routes.draw do
  resources :items, only: [:index, :create, :update, :show]
  
  get '/items', to: 'items#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
