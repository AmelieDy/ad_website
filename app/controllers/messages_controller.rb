class MessagesController < ApplicationController
  def new
    @message = Message.new
  end
  def create
    @message = Message.new message_params
    MessageMailer.submission(@message).deliver_now
    respond_to do |format|
      format.js
    end
  end

  private

  def message_params
    params.require(:message).permit(:name, :firstname, :email, :body)
  end

end
