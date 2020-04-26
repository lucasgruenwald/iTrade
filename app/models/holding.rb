# == Schema Information
#
# Table name: holdings
#
#  id           :bigint           not null, primary key
#  user_id      :integer          not null
#  stock_ticker :string           not null
#  share_count  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Holding < ApplicationRecord
    validates :stock_ticker, :share_count, :user_id, presence: true 
    
    belongs_to :user, 
    foreign_key: :user_id, 
    class_name: :User


end
