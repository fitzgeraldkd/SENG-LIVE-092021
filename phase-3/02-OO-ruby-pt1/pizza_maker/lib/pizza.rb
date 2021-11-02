class Pizza
  def initialize(name, toppings, desc)
    @name = name
    @toppings = toppings
    @desc = desc
  end

  def details
    puts ""
    puts "Name: #{@name}"
    puts "  #{@toppings}"
    puts "  #{@desc}"
    puts ""
  end
end