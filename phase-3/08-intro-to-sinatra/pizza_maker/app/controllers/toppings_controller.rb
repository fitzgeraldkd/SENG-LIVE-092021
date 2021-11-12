class ToppingsController < ApplicationController
  get '/toppings' do
    Topping.all.to_json
  end

  get '/toppings/:id' do
    Topping.find(params[:id]).to_json(include: :pizzas)
  end
end