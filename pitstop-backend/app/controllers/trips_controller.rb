class TripsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        trips = Trip.all
        render json: trips
    end

    def show
        trip = Trip.find(params[:id])
        render json: trip
    end

end
