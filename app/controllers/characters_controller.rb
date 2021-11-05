class CharactersController < ApplicationController
    before_action :authorize
      

        def index
            user = User.find_by(id: session[:user_id])
            characters = user.characters
            render json: characters
        end

        def show
            user = User.find_by(id: session[:user_id])
            character = Character.find_by(character_params)
            render json: character, except: [:created_at, :updated_at]  
        end
    
        def create
        
            user = User.find_by(id: session[:user_id])
            character = user.characters.create!(character_params)
            render json: character, status: :created, include: :user
        
        rescue ActiveRecord::RecordInvalid => invalid
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end 

        def destroy
            character = Character.find_by(id: params[:id])
            character.destroy
            head :no_content
        end 

        def update
            character = Character.find_by(id: params[:id])
            character.update(character_params)
            render json: character
        end 

        
        private
    
        def character_params
            params.permit(:name, :klass, :level, :id, :race, :background, :alignment, :experience)
        end 
    
        def authorize
    
            return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id 
          
        end
    
    end