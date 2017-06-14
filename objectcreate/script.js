'use strict';

/*

function Cat(name,color) {
  this.name = name;
  this.color = color;
}

var cat = new Cat('fluffy','white');
display(cat.color);

The above way of creating objects is just the syntactic
sugar of Object.create for creating an object

Object.create is the one which works at the root level to create the
object.

*/

//syntax
/* variable declaration = Object.create(Object.prototype,{

   someproperty : {
     value : '<value>',
     enumerable:<true or false>,
     writable:<true or false>,
     configurable:<true or false>
   }

})

The above is what happens when we create objects using
object literals (or) constructor functions

*/

var cat = Object.create(Object.prototype,{
  name:{
    value:'fluffy',
    enumerable:true,
    writable:true,
    configurable:true
  },
  color:{
    value:'white',
    enumerable:true,
    writable:true,
    configurable:true
  }
});

display(cat);

//so here our object becomes the new prototype of our object.


