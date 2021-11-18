class InventoriesController < ApplicationController
   before_action :authorize
  

    def create 
     character = Character.find_by(id: params[:character_id])
     inventory = character.inventories.create!(inventory_params)
     render json: inventory, status: :created, include: [item: {except: [:created_at, :updated_at]}]
    rescue ActiveRecord::RecordInvalid => invalid
     render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy
        inventory = Inventory.find_by(id: params[:id])
        inventory.destroy
        head :no_content
    end 
    private

    def inventory_params
        params.permit(:character_id, :item_id)

    end 

    def authorize
    
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id 
      
     end

     

end 
