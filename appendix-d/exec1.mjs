/* eslint-disable no-console */
import rxjs from "rxjs";
import op from "rxjs/operators";

rxjs.of(1,2,3)
  .subscribe(
    value => console.log(value),
    err => console.error(err),
    () => console.log("Streaming is over")
  );

console.log();
console.log("-------------------------")
console.log();

const beers0 = [
  { name: "Stella", country: "Belgium", price: 9.50 },
  { name: "Sam Adams", country: "USA", price: 8.50 },
  { name: "Bud Light", country: "USA", price: 6.50 }
];

// rxjs.from(beers0, rxjs.asyncScheduler) -> for async execution
rxjs.from(beers0)
  .pipe(
    op.filter(beer => beer.price < 8),
    op.map(beer => `${beer.name}: ${beer.price}`)
  )
  .subscribe(
    beer => console.log(beer),
    err => console.log(err)
  );

console.log("This is the last line of the script");

console.log();
console.log("-------------------------")
console.log();


const beers = [
  { name: "Stella", country: "Belgium", price: 9.50 },
  { name: "Sam Adams", country: "USA", price: 8.50 },
  { name: "Bud Light", country: "USA", price: 6.50 },
  { name: "Brooklyn Lager", country: "USA", price: 8.00 },
  { name: "Sapporo", country: "Japan", price: 7.50 }
];

rxjs.from(beers)
  .pipe(
    op.map(beer => beer.price),
    op.tap(price => console.log(`Price: ${price}`)),
    op.reduce((total, price) => total + price, 0)
  )
  .subscribe(
    totalPrice => console.log(`Total price: ${totalPrice}`),
    err => console.log(err)
  );