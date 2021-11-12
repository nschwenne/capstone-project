class CharactersController < ApplicationController
    before_action :authorize
        

        def index
            user = User.find_by(id: session[:user_id])
            characters = user.characters
            render json: characters, except: [:created_at, :updated_at] 
        end

        def show
            user = User.find_by(id: session[:user_id])
            character = Character.find_by(character_params)
            render json: character, except: [:created_at, :updated_at], include: [inventories: {only: [:id], include: [item: {except: [:created_at, :updated_at]}]}]
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
            params.permit(
                :image_url, 
                :name, 
                :klass, 
                :level, 
                :id, 
                :race, 
                :campaign_id,
                :background, 
                :alignment, 
                :experience,
                :strength,
                :dexterity,
                :constitution,
                :intelligence,
                :wisdom,
                :charisma,
                :armor_class,
                :initiative,
                :speed,
                :hit_point_maximum,
                :current_hit_points,
                :temporary_hit_points,
                :hit_dice,
                :athletics,
                :str_saving,
                :dex_saving,
                :acrobatics,
                :sleight_of_hand,
                :stealth,
                :con_saving,
                :int_saving,
                :arcana,
                :history,
                :investigation,
                :nature,
                :religion,
                :wis_saving,
                :animal_handling,
                :insight,
                :medicine,
                :perception,
                :survival,
                :cha_saving,
                :deception,
                :intimidation,
                :performance,
                :persuasion)
        end 
    
        def authorize
    
            return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id 
          
        end
    
    end