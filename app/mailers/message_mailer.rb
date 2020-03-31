class MessageMailer < ApplicationMailer

  default from: 'notifications@example.com'

  CONTACT_EMAIL = "amelie.delory@gmail.com"

  def submission(message)
    @message = message
    mail(to: CONTACT_EMAIL, subject: 'Nouveau message site web')
  end
end
