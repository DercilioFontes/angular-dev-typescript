function StockQuoteGenerator(symbol) {
  // this.symbol = symbol;
  const that = this;
  that.symbol = symbol;

  setInterval(function() {
    console.log('The price of ' + that.symbol + ' is ' + Math.random());
  }, 1000);
}

function StockQuoteGenerator2(symbol) {
  this.symbol = symbol;
  // const that = this;
  // that.symbol = symbol;

  setInterval(() => {
    console.log('The price of ' + this.symbol + ' is ' + Math.random());
  }, 1000);
}

// const stockQuoteGenerator = new StockQuoteGenerator("IBM");
const stockQuoteGenerator2 = new StockQuoteGenerator2('IBM2');
