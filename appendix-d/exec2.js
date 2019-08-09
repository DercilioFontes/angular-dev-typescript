/* eslint-disable no-console */

//import { Observable } from "rxjs";
const { Observable, from } = require("rxjs");

const beers = [
  { name: "Stella", country: "Belgium", price: 9.50 },
  { name: "Sam Adams", country: "USA", price: 8.50 },
  { name: "Bud Light", country: "USA", price: 6.50 },
  { name: "Brooklyn Lager", country: "USA", price: 8.00 },
  { name: "Sapporo", country: "Japan", price: 7.50 }
];

//const beer = { name: "Stella", country: "Belgium", price: 9.50 };

const beerObserver = {
  next: function(beer) { console.log(`Subscriber got ${beer.name}`); },
  error: function(err) { console.log(err); },
  complete: function() { console.log("The stream is over"); }
};

const beerObservable$ = Observable
  .create(observer => beers.forEach(beer => observer.next(beer)));

beerObservable$.subscribe(beerObserver);

console.log();
console.log("-------------------------");
console.log();

from(beers)
  .subscribe(beerObserver);

function getObservableBeer() {
  return Observable.create(observer => {
    const beers2 = [
      { name: "Stella2", country: "Belgium", price: 9.50 },
      { name: "Sam Adams2", country: "USA", price: 8.50 },
      { name: "Bud Light2", country: "USA", price: 6.50 },
      { name: "Brooklyn Lager2", country: "USA", price: 8.00 },
      { name: "Sapporo2", country: "Japan", price: 7.50 }
    ];
    beers2.forEach(beer => observer.next(beer));
    observer.complete();
  });
}

console.log();
console.log("-------------------------");
console.log();

getObservableBeer()
  .subscribe(beerObserver);