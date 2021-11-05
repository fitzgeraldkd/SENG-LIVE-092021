class CreatePizzaToppings < ActiveRecord::Migration[6.1]
  def change
    create_table :pizza_toppings do |t|
      t.belongs_to :pizza
      t.belongs_to :topping
    end
  end
end
