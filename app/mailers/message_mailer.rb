class MessageMailer < ApplicationMailer

  default from: 'notifications@example.com'

  CONTACT_EMAIL = ENV['DATABASE_URL']

  def submission(message)
    @message = message
    mail(to: CONTACT_EMAIL, subject: 'Nouveau message site web')
  end
end
