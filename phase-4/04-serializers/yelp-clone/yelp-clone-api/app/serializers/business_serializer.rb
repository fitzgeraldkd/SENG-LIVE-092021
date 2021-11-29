class BusinessSerializer < ActiveModel::Serializer
  attributes :name, :category, :location
  has_many :reviews

  def location
    record = self.object
    "#{record.city.titleize}, #{record.state.titleize} #{record.zip_code}"
  end
end
