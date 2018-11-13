Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'create', to: 'tables#create'
    end
  end

  root 'static#home'
end
