class Pizza

    @@all = []

    attr_accessor :name, :toppings, :desc

    def self.all
        @@all
    end

    def self.create(attributes)
        self.new(attributes).save
    end

    def self.find_by_name(name)
        @@all.find {|pizza| pizza.name == name }
    end

    def initialize(name:, toppings:, desc:) 
        @name = name 
        @toppings = toppings 
        @desc = desc 
    end

    def details 
        puts ""
        puts "Pizza Details:"
        puts self.name 
        puts self.toppings
        puts self.desc
        puts ""
    end
    
    def save
        @@all << self
        self
    end

end
