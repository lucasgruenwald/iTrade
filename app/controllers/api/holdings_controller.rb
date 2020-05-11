class Api::HoldingsController < ApplicationController

    def create 
        @holding = Holding.new(holding_params)
        @holding.save
        render :show
    end 

    def destroy 
        Holding.where(stock_ticker: params[:holding][:stock_ticker], user_id: params[:holding][:user_id]).destroy_all
        # this_one = Holding.where(stock_ticker: params[:holding][:stock_ticker], user_id: params[:holding][:user_id])
        # render json: [this_one]
    end

    def update
        @holdings = Holding.where(user_id: params[:holding][:user_id].to_i)
        @holding = @holdings.find_by(stock_ticker: params[:holding][:stock_ticker])
        new_val = params[:holding][:share_count].to_i
        @holding.update(share_count: new_val)
        render :show
    end 

    def show
        @holdings = Holding.where(user_id: params[:user_id].to_i)
        @holding = @holdings.find_by(stock_ticker: params[:ticker])
        if @holding
            render :show
        else
            render json: ["Stock not owned"]
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
        params.require(:holding).permit(:user_id, :stock_ticker, :share_count)
    end
end 