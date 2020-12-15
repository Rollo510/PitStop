Rails.application.routes.draw do
  resources :trips
  resources :stops
  devise_for :users
 
end
