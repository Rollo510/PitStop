class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        user = User.all
    end

    def create
        user = User.find_or_create_by(username:params[:username], password: params[:password])
		if user || user.new_record? && user.save
            session[:user_id] = user.id            
        end
        render json: user
    end

end