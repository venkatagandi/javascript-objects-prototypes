'use strict';

//new keyword ------ to create multiple instances of cat like
//static language

//some variable declaration  = new  somefunction;
//var fluffycat = new cat();
//var goldcat = new cat();

function cat(name,color) {
  this.name = name;
  this.color = color;
}

var cat = new cat('fluffy','white');

display(cat.color);