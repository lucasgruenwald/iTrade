# @holdings.each do |holding|
#     json.partial! "api/holdings/holding", holding: @holding
# end

# @holdings.each do |holding|
#     json.partial! "api/holdings/holding", holding: holding
# end

@holdings.each do |holding|
    json.set! holding.id do 
        json.extract! holding, :id, :user_id, :stock_ticker, :share_count
    end 
end

