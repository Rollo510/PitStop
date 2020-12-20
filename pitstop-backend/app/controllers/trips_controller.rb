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

    def create
        user = User.create(username: params[:username])
        trip = Trip.find_or_create_by(name: params[:tripName])
        stops = []
        params[:stops].each do |stop|
            new_stop = stop[:name]
            new_review = stop[:review]
            stops.push(Stop.create(name: new_stop, review: new_review, user_id: user.id, trip_id: trip.id, lat: stop[:lat], lng: stop[:lng] ))
        end
        render json: {trip: trip, stops: stops}
    end

end
