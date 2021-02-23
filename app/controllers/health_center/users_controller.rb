class HealthCenter::UsersController < ApplicationController
  def index
    @messages = current_health_center.messages
    user_ids = @messages.map(&:user_id)
    @users = User.where(id: user_ids).search(params[:search]).distinct
    # user_ids = @messages.map{|message| message.user_id}
  end

  def show
    @user = User.find(params[:id])
  end
end
