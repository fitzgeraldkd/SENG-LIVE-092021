class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :content
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :business, null: false, foreign_key: true

      t.timestamps
    end
  end
end
