# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Holding.destroy_all 

Demo = User.create(
    email: "iTradeDemoUser@gmail.com", 
    password: "password",
    first_name: "Demo",
    last_name: "User",
)

Holding1 = Holding.create(
    user_id: 5,
    stock_ticker: "FB",
    share_count: 200
)

Holding2 = Holding.create(
    user_id: 5,
    stock_ticker: "AMD",
    share_count: 800
)

Holding3 = Holding.create(
    user_id: 5,
    stock_ticker: "AAPL",
    share_count: 1000
)

Holding4 = Holding.create(
    user_id: 5,
    stock_ticker: "GOOG",
    share_count: 5
)

Holding5 = Holding.create(
    user_id: 5,
    stock_ticker: "TSLA",
    share_count: 7
)

Holding6 = Holding.create(
    user_id: 6,
    stock_ticker: "NCL",
    share_count: 10000
)




