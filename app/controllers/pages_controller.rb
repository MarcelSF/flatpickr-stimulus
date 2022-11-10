class PagesController < ApplicationController
  def home
    @appointments = Appointment.all
  end
end
