class Api::HoldingsController < ApplicationController

    def create 
        # if available_cash >= 0 
        #need to determine if this is a new holding 
        # or a change to an existing holding 
        @user_holdings = Holding.where(user_id: params[:holding][:user_id])
        @found_record = @user_holdings.find_by(ticker: params[:holding][:ticker])

        
            if true #need to check if purchase is within avail cash limit 
                # if @found_record
                #     need to add this update feature later
                #     prev = @found_record.share_count 
                #     change = params[:holding][:share_count]
                #     @found_record.update (share_count: (prev + change))
                #     render :show 
                # else
                    @holding = Holding.new(holdings_params)
                    @holding.save
                    render :show
                # end
            end 
        # end
    end 

    def show
        @holdings = Holding.where(user_id: params[:user_id].to_i)
        @holding = @holdings.find_by(stock_ticker: params[:ticker])
        if @holding
            render :show
        else
            render json: ["Error. Stock not owned?"]
        end
    end


    def index 
        @holdings = Holding.where(user_id: params[:user_id])
        if @holdings
            render :index
        else
            render json: ['Error. No holdings?'], status: 404
        end
    end

    private
    def holding_params 
        params.require(:holding).permit(:user_id, :ticker, :share_count)
    end
end 