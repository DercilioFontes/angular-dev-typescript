import { asyncScheduler, from, Observable } from "rxjs";
import { flatMap } from "rxjs/operators";

function getDrinks() {
  const beers$ = from(
    [
      { name: "Stella", country: "Belgium", price: 9.5 },
      { name: "Sam Adams", country: "USA", price: 8.5 },
      { name: "Bud Light", country: "USA", price: 6.5 },
    ],
    asyncScheduler,
  );

  const softDrinks$ = from(
    [
      { name: "Coca Cola", country: "USA", price: 1.5 },
      { name: "Fanta", country: "USA", price: 1.5 },
      { name: "Lemonade", country: "France", price: 2.5 },
    ],
    asyncScheduler,
  );

  return Observable.create((observer: any) => {
    observer.next(beers$);
    observer.next(softDrinks$);
    observer.complete();
  });
}

// We want to "unload" each palette and print each drink info

getDrinks()
  .pipe(flatMap((drinks: any) => drinks))
  .subscribe(
    (drink: any) => console.log(`Subscriber got ${drink.name}: ${drink.price}`),
    (error: any) => console.error(error),
    () => console.log("The stream of drinks is over"),
  );
