class ItemsController < ApplicationController

    def index
    i = Item.all
    render json: i
    end

    def create 
        i = Item.create(items_params)
        render json: i,  status: :created
    end


    private 

    def items_params
        params.permit(:name, :item_type, :character_type, :image, :effect, :stats, :cost)
    end

end
