class MessageJob < ApplicationJob
  queue_as :default

  def perform(*args)
    MessageMailer.submission(message).deliver
  end
end
