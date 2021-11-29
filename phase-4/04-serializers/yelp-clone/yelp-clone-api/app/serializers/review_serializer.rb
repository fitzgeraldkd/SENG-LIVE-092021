class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_date, :author

  def post_date
    self.object.created_at.strftime("%m/%e/%Y %l:%M%p %Z")
  end

  def author
    self.object.user.username
  end
end
