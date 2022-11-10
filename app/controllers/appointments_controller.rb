class AppointmentsController < ApplicationController
  def create
    @appointment = Appointment.new(appointment_params)
    @appointment.save
    redirect_to root_path
  end

  private

  def appointment_params
    params.require(:appointment).permit(:start_time, :end_time)
  end
end
