class ResumeController < ApplicationController
  def index
    @experiences = Experience.all
    @message = Message.new
  end

  def download_pdf
    pdf_filename = File.join(Rails.root, "/app/assets/images/pdf/resume.pdf")
    send_file(pdf_filename, :filename => "resume.pdf", :type => "application/pdf", disposition: 'inline')
  end
end
