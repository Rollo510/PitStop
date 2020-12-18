class StopsController < ApplicationController
    skip_before_action :verify_authenticity_token


    def index
        stops = Stop.all
        render json: stops
    end

    def create
        byebug
        stop = Stop.new(stop_params)
        if stop.save
            render json: stop
        end
    end

    def show
        stop = Stop.find(params[:id])
        render json: stop
    end


    private

    def stop_params
        params.require(:stop).permit(:review, :location, )
    end

end
