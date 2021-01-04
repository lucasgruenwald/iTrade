require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do 

    describe 'POST #create' do 
        context 'with valid params' do 
            it 'creates the user' do
                createParams = {user: {first_name: "bob", last_name: "smith", 
                email: "testcase@email.com", password: "testpassword" }}
                post :create, format: 'json', params: createParams
                expect(response).to have_http_status(200)
            end 
        end 
        context 'with invalid params' do 
            it 'does not create invalid user, returns 422' do
                badParams = {user: {first_name: "bob", last_name: "smith", 
                email: "nopassword@email.com"}}
                post :create, format: 'json', params: badParams
                expect(response).to have_http_status(422)
            end 
        end 
    end

end