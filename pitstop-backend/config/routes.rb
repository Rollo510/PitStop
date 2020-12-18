Rails.application.routes.draw do
  
  
  # post '/users/sign_in', to: 'users#sign_in'
  resources :trips
  resources :stops
  resources :users


end
