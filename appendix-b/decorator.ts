function UIComponent (html: string) {
  console.log(`The decorator received ${html} \n`);

  return function(target: any) {
    console.log(`Creating a UI component from \n ${target} `);
  }
}

@UIComponent('<h1>Hello Shopper!</h1>')
class Shopper{
  constructor(private name: string) {}
}