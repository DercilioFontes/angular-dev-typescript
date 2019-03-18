function getStock() {
  return {
    symbol: 'IBM',
    price: 100.0
  };
}

// let { symbol, price } = getStock();

// console.log(`The price of ${symbol} is ${price}`);

let { symbol, price, stockExchange = 'NASDAQ' } = getStock();

console.log(`The price of ${symbol} is ${price} ${stockExchange}`);



let msft = {
  symbol: 'MSFT',
  lastPrice: 50.0,
  exchange: {
    name: 'NASDAQ',
    tradingHours: '9:30am-4pm'
  }
};

function printStockInfo(stock) {
  let {
    symbol,
    exchange: { name }
  } = stock;
  console.log(`The ${symbol} stock is traded at ${name}`);
}

printStockInfo(msft);
