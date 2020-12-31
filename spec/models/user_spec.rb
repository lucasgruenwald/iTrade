require 'rails_helper'

RSpec.describe User, type: :model do

  # test validations, associations, class methods, error messages

    describe "validations" do 
        it { should validate_presence_of(:first_name) }
        it { should validate_presence_of(:last_name) }
        it { should validate_presence_of(:password_digest) }
        subject { User.new(first_name: "John", last_name: "Doe", email: "myemail101@a.com", password_digest: "fakepassword")}
        it { should validate_uniqueness_of(:email).ignoring_case_sensitivity }
    end

    describe "associations" do 
        it { should have_many(:holdings) }
    end

    describe "class methods" do 
        # no test case for find_by_credentials as it uses bcrypt
    end

end 