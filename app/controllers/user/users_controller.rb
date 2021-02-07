class User::UsersController < ApplicationController
  
  before_action :authenticate_user!
  
  def show
    @user = User.find(params[:id])
  end
  
  def edit
    @user = User.find(params[:id])
  end
  
  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to user_user_path
    else
      render edit
    end  
  end
  
  def destroy
    @user = User.find(params[:id])
    @user.delete
    redirect_to user_user_path
  end
  
end
