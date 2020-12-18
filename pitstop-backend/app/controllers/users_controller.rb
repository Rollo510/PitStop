class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token


    # def sign_in
    #     user = User.find_by(username:params[:user][:username], password_digest: params[:user][:password])
	# 	if user
    #         session[:user_id] = user.id
    #         render json: user
    #     else
    #         render json: flash[:notice] = "Incorrect Username or Password"
    #     end
    # end

end