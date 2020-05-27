## Welcome to iTrade!

[Click Here - Live Site](http://i-trade-app.herokuapp.com)

### Background

 iTrade is a tribute to the popular stock trading app Robinhood. You can use pseudo money to buy and sell equity shares in thousands of publicly traded companies. Interactive graphs provide historical pricing data on individual stocks. The main dashboard provides users with an interactive graph of their overall performance. The site also provides live pricing, news, and other informative data about their investments.


### Features

* Recharts library displays live & historical stock prices using API data
* Filtered data from News API displays relevant news on selected companies
* Connection to rails backend allows users to simulate stock trades
* Stock search feature allows users to find publicly traded companies


### Dashboard Page

* Overview of stock holdings (# of shares, current price)
* Historical stock graph displaying combined value of current holdings 
* General news section providing recent business-related articles 
![dashboard](app/assets/images/dashboard.gif)



### Stock Page

* Company data such as market cap, industry, etc. 
  * Achieved with API calls to [Financial Modeling Prep](https://financialmodelingprep.com)
* Historical stock graphs populated with price data from custom API calls 
  ```js
  updatePrices(key) {
        if (this.state.period !== key) {
            return e => {
                switch (key) {
                    case '1D':  
                        fetchDailyPrices(this.props.ticker).then(response => this.renderDay(response));
                        break;
                    case '5D':  
                        fetch5D(this.props.ticker).then(response => this.render5D(response));
                        break;
                    case '1M': 
                        fetch1M(this.props.ticker).then(response => this.render1M(response));
                        break;
                    case '3M': 
                        fetch3M(this.props.ticker).then(response => this.render3M(response));
                        break;
                    case '1Y': 
                        fetch1Y(this.props.ticker).then(response => this.render1Y(response));
                        break;
                };
            };
        };
    };
  ```
* Rule-based transactions to modify holdings in the Rails backend
  ```js
   if (holding.share_count === 0) {
              return;
          } else if ( this.state.tranType === "buy"){
              if ((this.state.share_count * Number((this.props.price).replace(/[^0-9.-]+/g, ""))) < (this.state.cash)) {
                  if (this.props.holdings.share_count > 0) {
                      let total = holding.share_count + this.props.holdings.share_count
                      const editedHolding = {
                          user_id: this.state.user_id,
                          stock_ticker: tick,
                          share_count: total
                      }
                      this.props.updateHolding(editedHolding)
                      this.state.share_count = 0
                      this.state.buttonText = "Order Complete"
                  }
              }
          }
        // 
        <!-- more conditonal statements cover all buy and sell scenarios -->
  ```

* Company news section providing relevant news using filtered API calls
![stock-page](app/assets/images/stockpage.gif)



### Company Search

* Find companies by name or stock symbol
* Suggestions filtered for closest matches
```js
    companies.forEach((ticker, idx) => {
        if (entry.length > 0) {
            if (ticker.symbol === entry){
                found.push(ticker.symbol)
                suggestions.unshift(
                    <li key={idx} className="suggestion-item">
                        <Link
                            to={`/stock/${ticker.symbol}`}
                            key={idx}
                            className="suggestion-link"
                            onClick={this.handleClearForm}>
                            {ticker.symbol} · {ticker.name}
                        </Link>
                    </li>
                )
            }
            <!-- further conditonal statements provide more suggestions -->
        }
    }
  ```
![search-field](app/assets/images/search.gif)



### Technologies & Libraries

* Frontend: Javascript | React.js | Redux.js
* Backend: Ruby on Rails | ActiveRecord | PostgreSQL
* [Twelvedata API](http://twelvedata.com)
* [News API](http://newsapi.org)
* [Financial Modeling Prep API](https://financialmodelingprep.com)
* [Recharts](http://recharts.org)

