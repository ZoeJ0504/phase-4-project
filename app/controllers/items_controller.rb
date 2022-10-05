class ItemsController < ApplicationController

    def index
    i = Item.all
    render json: i
    end

    def create 
        i = Item.create(items_params)
        render json: i,  status: :created
    end

    def update
        i = Item.find(params[:id])
        item = i.update(:image => params[:image])
        render json: item
    end

    def show
        i = Item.find(params[:id])
        render json: i 
    end

    private 

    def items_params
        params.permit(:name, :item_type, :character_type, :image, :effect, :stats, :cost)
    end

end
