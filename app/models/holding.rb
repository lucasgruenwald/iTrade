class Holding < ApplicationRecord
    validates :stock_ticker, :share_count, presence: true 
    
end
