Rails.application.routes.draw do
  namespace :api, constraints: { format: 'json' } do
    namespace :v1 do
      post 'create', to: 'tables#create'
    end
  end

  root 'static#home'
end
