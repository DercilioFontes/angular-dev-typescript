import { interval } from "rxjs";
import { map, switchMap, take } from "rxjs/operators";

const outer$ = interval(1000).pipe(take(2));

const combine$ = outer$.pipe(
  switchMap((x) => {
    return interval(400).pipe(
      take(3),
      map((y) => `outer ${x} : inner ${y}`),
    );
  }),
);

combine$.subscribe((result) => console.log(`${result}`));
