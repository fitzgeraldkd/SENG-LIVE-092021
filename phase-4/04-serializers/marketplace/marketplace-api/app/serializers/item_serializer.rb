class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :price, :status

  belongs_to :seller
  has_many :categories

  def price
    "$#{'%.2f' % self.object.price}"

    # # probably need to import something for this to work
    # number_to_currency(self.object.price)
  end

  def status
    self.object.sold ? "Sold" : "Buy Now"
  end
end
