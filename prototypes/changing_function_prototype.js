'use strict';

function Cat(name,color){
  this.name = name;
  this.color = color;
}

Cat.prototype.age = 3;

var fluffy = new Cat('Fluffy','white');
var muffin =  new Cat('muffin','brown');

display(fluffy.__proto__);
display(muffin.__proto__);

Cat.prototype = {age:8};

//we still see fluffy and muffin's proto as 3.

var snowbell = new Cat('snowbell','gold');

display(snowbell.__proto__);
//see this will point to lastest Cat.prototype.

//This clearly states that whenever we create a Cat.prototype.

//it is explicitly creating objects in the memory thats why
//fluffy and muffin are pointing to 3 whereas snowbell are pointing to
//8.

//================================================================//

//levels of prototype.

display(Cat.__proto__.__proto__);//Object as all function derives from an
//Object in javascript
//display(Cat.__proto__.__proto__.__proto__);//null

display(fluffy.__proto__); // Cat { age:3 }

display(fluffy.__proto__.__proto__); // Object {  }

display(fluffy.__proto__.__proto__.__proto__); // null