Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :messages, only: [:new, :create]
  resources :website, only: [:index]
  resources :resume, only: [:index]
  root "website#index"
  get 'download_pdf', to: "resume#download_pdf"
end
