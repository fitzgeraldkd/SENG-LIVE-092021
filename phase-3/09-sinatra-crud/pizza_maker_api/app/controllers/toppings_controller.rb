class ToppingsController < ApplicationController
    
    get '/toppings' do 
        toppings = Topping.all 
        toppings.to_json 
    end
    
    get '/toppings/:id' do 
        topping = Topping.find_by_id(params[:id])
        topping.to_json
    end

    post '/toppings' do
        topping = Topping.create(name: params[:name])
        topping.to_json
    end

    patch '/toppings/:id' do
        topping = Topping.find(params[:id])
        topping.update(name: params[:name])
        topping.to_json
    end

    delete '/toppings/:id' do
        topping = Topping.find(params[:id])
        topping.destroy
    end
end