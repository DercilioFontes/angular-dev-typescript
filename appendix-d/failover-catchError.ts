import { EMPTY, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

function getData() {
  const beers = [
    { name: "Sam Adams", country: "USA", price: 8.5 },
    { name: "Bud Light", country: "USA", price: 6.5 },
    { name: "Brooklyn Lager", country: "USA", price: 8.0 },
    { name: "Sapporo", country: "Japan", price: 7.5 },
  ];

  return Observable.create((observer: any) => {
    let counter = 0;
    beers.forEach((beer) => {
      observer.next(beer);
      counter++;

      if (counter > Math.random() * 5) {
        observer.error({
          description: "Beer stream error",
          status: 500,
        });
      }
    });
    observer.complete();
  });
}

// Subscribing to data from the primary source
getData()
  .pipe(
    catchError((err) => {
      console.log(`Got ${err.status}: ${err.description}`);
      if (err.status === 500) {
        console.error(">>> Retrieving cached data");
        return getCachedData();
      } else {
        return EMPTY;
      }
    }),
    map((beer: any) => `${beer.name}, ${beer.country}`),
  )
  .subscribe(
    (beer: any) => console.log(`Subscriber got ${beer}`),
    (err: any) => console.error(err),
    () => console.log("The stream is over"),
  );

function getCachedData() {
  const beers = [
    { name: "Leffe Blonde", country: "Belgium", price: 9.5 },
    { name: "Miller Lite", country: "USA", price: 8.5 },
    { name: "Corona", country: "Mexico", price: 8.0 },
    { name: "Asahi", country: "Japan", price: 7.5 },
  ];

  return Observable.create((observer: any) => {
    beers.forEach((beer) => observer.next(beer));
    observer.complete();
  });
}
