require 'rails_helper'

RSpec.describe Api::HoldingsController, type: :controller do 
 
    describe 'POST #create' do 
        context 'with valid params' do 
            it 'creates the holding, returns 200' do
                createParams = { holding: {user_id: 1, stock_ticker: "TSLA",
                                share_count: 1 }}
                post :create, format: 'json', params: createParams
                expect(response).to have_http_status(200)
            end 
        end 
    end

end