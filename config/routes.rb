Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create, :update] do 
       resources :holdings, only: [:index, :show, :create, :update, :destroy]
    end
    resources :holdings, only: [:index, :show, :create, :update, :destroy]
    resources :news, only: [:index]
    resources :newsone, only: [:index]
  end

  root "static_pages#root"
end
