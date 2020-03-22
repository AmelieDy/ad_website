class MessagesController < ApplicationController
  def new
    @message = Message.new
  end
  def create
    @message = Message.new message_params
    MessageMailer.submission(@message).deliver_now
    render :new
  end

  private

  def message_params
    params.require(:message).permit(:name, :email, :body)
  end

end
