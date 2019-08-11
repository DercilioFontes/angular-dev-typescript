import { Subject } from "rxjs";

// Uses enums to declare which actions are allowed for orders
enum Action {
  Buy = "BUY",
  Sell = "SELL"
}

class Order {
  constructor(
    public orderId: number,
    public traderId: number,
    public stock: string,
    public shares: number,
    public action: Action
  ) {}
}

// A subject instance that works only with Order objects
const orders$ = new Subject<Order>();

class Trader {
  constructor(private traderId: number, private traderName: string) {}

  // When an order is placed, pushes it to subscribers
  public placeOrder(order: Order) {
    orders$.next(order);
  }
}

// A stock exchange subscriber
const stockExchange = orders$.subscribe(ord =>
  console.log(
    `Sending to stock exchange the order to ${ord.action} ${
      ord.shares
    } shares of ${ord.stock}`
  )
);

// A trade commission subscriber
const tradeCommission = orders$.subscribe(ord =>
  console.log(
    `Reporting to trade commission the order to ${ord.action} ${
      ord.shares
    } shares of ${ord.stock}`
  )
);

const trader = new Trader(1, "Joe");
const order1 = new Order(1, 1, "IBM", 100, Action.Buy);
const order2 = new Order(2, 1, "AAPL", 100, Action.Sell);

trader.placeOrder(order1);
trader.placeOrder(order2);
