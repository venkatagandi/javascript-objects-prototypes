'use strict';

var cat = {
  name: {
    first: 'Fluffy',
    last: 'LaBeouf'
  },
  color: 'white'
}

//making a property configurable to false makes it not to be deleted accidentaly or configured


Object.defineProperty(cat, 'name', {
  configurable: false
});

//delete cat.name;//throws error
//we cannot change enmerable property
//we cannot change a property to non configurable again
/*
Object.defineProperty(cat, 'name', {
  configurable: true
});
throws error.

//we can change writable property
*/
display(cat);