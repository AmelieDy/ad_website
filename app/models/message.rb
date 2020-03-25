class Message
  include ActiveModel::Model
  attr_accessor :name, :firstname, :email, :phone_number, :body
  validates :name, :firstname, :email, :phone_number, :body, presence: true
end
