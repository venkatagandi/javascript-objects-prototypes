'use strict';

function Cat(name,color){
  this.name = name;
  this.color = color;
}

Cat.prototype.age = 3;

var fluffy = new Cat('Fluffy','white');
var muffin =  new Cat('muffin','brown');

display(fluffy.__proto__.age);
//we can get the value in the above way (or) directly calling the property
display(fluffy.age);

display(muffin.__proto__.age);
//we can get the value in the above way (or) directly calling the property
display(muffin.age);

//Now lets suppose we change fluffy's age to 5

fluffy.age = 5;

display(fluffy.age); //this just adds a property age. 5
display(fluffy.__proto__.age);//this will display 3
display(Cat.prototype.age);
display(muffin.__proto__.age);
display(muffin.age);

//so here when we asked fluffy for age property, it first looked into local
//property age and then just in case if it is not there it will look into prototype.

//thts why previously eventhough we donot have fluffy.age=5, it displayed 3 because
//it first checked whether fluffy has an age property , since it is not there it checked on
//the prototype property.
//to prove it

display(muffin.hasOwnProperty('age'));//returns false.

display(Object.keys(muffin));//display only name and color as keys in the array.

display(fluffy.hasOwnProperty('age')); //returns true

display(Object.keys(fluffy)); //displays name,color and age as keys in the array.

//so hence forth we can prove that instance properties overrides object prototype properties.





