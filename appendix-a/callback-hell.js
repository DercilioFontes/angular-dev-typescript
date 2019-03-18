(function getProductDetails() {
  setTimeout(function() {
    console.log('Getting customers');
    setTimeout(function() {
      console.log('Getting orders');
      setTimeout(function() {
        console.log('Getting products');
        setTimeout(function() {
          console.log('Getting products details');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
})();
