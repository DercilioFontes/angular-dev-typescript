import { Subject } from "rxjs";
import { flatMap } from "rxjs/operators";

enum Action {
  Buy = "BUY",
  Sell = "SELL",
}

class Order {
  constructor(
    public orderId: number,
    public traderId: number,
    public stock: string,
    public shares: number,
    public action: Action,
  ) {}
}

class Trader {
  public orders$ = new Subject<Order>();

  constructor(private tradeId: number, public traderName: string) {}
}

const traders$ = new Subject<Trader>();

const traderSubscriber = traders$.subscribe((trader) =>
  console.log(`Trader ${trader.traderName} arrived`),
);

const ordersSubscriber = traders$
  .pipe(flatMap((trader) => trader.orders$))
  .subscribe((ord) =>
    console.log(
      `Got order from trader ${ord.traderId} to ${ord.action} ${
        ord.shares
      } shares of ${ord.stock}`,
    ),
  );

const firstTrader = new Trader(1, "Joe");
const secondTrader = new Trader(2, "Mary");

traders$.next(firstTrader);
traders$.next(secondTrader);

const order1 = new Order(1, 1, "IBM", 100, Action.Buy);
const order2 = new Order(2, 1, "AAPL", 200, Action.Sell);
const order3 = new Order(3, 2, "MSFT", 500, Action.Buy);

// Traders place orders
firstTrader.orders$.next(order1);
firstTrader.orders$.next(order2);
secondTrader.orders$.next(order3);
