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
require 'test_helper'

class HoldingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
