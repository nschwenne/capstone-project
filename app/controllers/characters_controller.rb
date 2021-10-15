class CharactersController < ApplicationController
    before_action :authorize
      
    
    
        def index
            characters = Characters.all
            render json: characters, include: :user   
        end
    
        def create
            user = User.find_by(id: session[:user_id])
            character = user.character.create!(character_params)
            render json: character, status: :created, include: :user
        
        rescue ActiveRecord::RecordInvalid => invalid
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end 

        def destroy
            
        end 

        def update

        end 
        private
    
        def character_params
            params.permit(:name, :klass, :level)
        end 
    
        def authorize
    
            return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id 
          
        end
    
    end