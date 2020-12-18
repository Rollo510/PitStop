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
        params[:stops].each do |stop|
            new_stop = stop[:name]
            new_review = stop[:review]
            params[:locations].each do |location|
                new_place = Stop.create(name: new_stop, review: new_review, user_id: user.id, trip_id: trip.id, position: location[:position])
            end
        end
    end

end
