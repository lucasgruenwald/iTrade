require 'rails_helper'

RSpec.describe User, type: :model do

  # test validations, associations, class methods, error messages

    describe "validations" do 
        it { should validate_presence_of(:first_name) }
        it { should validate_presence_of(:last_name) }
        it { should validate_presence_of(:password_digest) }
        it { should validate_length_of(:password).is_at_least(8)}
        it { should validate_presence_of(:session_token) }
        it { should validate_presence_of(:email) }

        # provide new user record to test uniqueness
        subject(:user) { FactoryBot.build(:user)}
        it { should validate_uniqueness_of(:email).ignoring_case_sensitivity }
        it { should validate_uniqueness_of(:session_token)}
    end

    describe "associations" do 
        it { should have_many(:holdings) }
    end

    describe "class methods" do 
        # no test case for find_by_credentials as it uses bcrypt
    end

end 