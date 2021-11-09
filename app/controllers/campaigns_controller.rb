class CampaignsController < ApplicationController
    before_action :authorize
    
    def index
        user = User.find_by(id: session[:user_id])
        campaigns = user.campaigns
        render json: campaigns, except: [:created_at, :updated_at], include: {characters: {only: [:name]}}
    end

    def show
        user = User.find_by(id: session[:user_id])
        campaign = Campaign.find_by(campaign_params)
        render json: campaign, except: [:created_at, :updated_at], include: {characters: {only: [:name]}}
    end

    def create
    
        user = User.find_by(id: session[:user_id])
        campaign = user.campaigns.create!(campaign_params)
        render json: campaign, status: :created
    
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end 

    def destroy
        campaign = Campaign.find_by(id: params[:id])
        campaign.destroy
        head :no_content
    end 

    def update
        campaign = Campaign.find_by(id: params[:id])
        campaign.update(character_params)
        render json: campaign
    end 
    private

    def campaign_params
        params.permit(
            :name,
            :description,
            :setting,
            :id
        )
    end 
    def authorize
    
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id 
      
    end
end 
