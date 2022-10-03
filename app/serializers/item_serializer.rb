class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :item_type, :character_type, :image, :effect, :stats, :cost
  
end
