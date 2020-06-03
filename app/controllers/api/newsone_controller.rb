require 'open-uri'

class Api::NewsoneController < ApplicationController

  def index
    url = "https://newsapi.org/v2/everything?q=#{params[:data_val]}&apiKey=#{Rails.application.credentials.news[:api_key]}"
    @newsone = JSON.parse(open(url).read)
    render json: @newsone
  end

end
