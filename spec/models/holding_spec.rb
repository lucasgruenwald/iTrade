require 'rails_helper'

RSpec.describe Holding, type: :model do

  # test validations, associations, class methods, error messages

    describe "validations" do 
        it { should validate_presence_of(:stock_ticker) }
        it { should validate_presence_of(:share_count) }
        it { should validate_presence_of(:user_id) }
    end

    describe "associations" do 
        it { should belong_to(:user) }
    end

    describe "class methods" do 
        # no class methods
    end

end 