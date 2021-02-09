Rails.application.routes.draw do
  
mount ActionCable.server => '/cable'

  
  devise_for :health_centers

  devise_for :users
  

root to: "user/homes#top"

namespace :user do

  get "homes/about" => "homes#about"

  resources :user_healths, only: [:new, :create, :index, :show]
  post "user_healths/confirm" => "user_healths#confirm"
  resources :users, only: [:show, :edit, :update, :destroy]
  put "/users/:id/hide" => "users#hide", as: "users_hide"
  resources :health_centers, only: [:index, :show]
  get "health_centers/search" => "health_centers#search"
  resources :room

end

namespace :health_center do

  get "/homes/about" => "homes#about"
  get "/chats/search" => "chats#search"

  resources :users, only: [:index, :show]
  get "/users/search" => "users#search"

  resources :user_healths, only: [:index, :show]

end

end
