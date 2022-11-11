class PagesController < ApplicationController
  def home
    @appointments = Appointment.all
    @appointment = Appointment.new
  end
end
