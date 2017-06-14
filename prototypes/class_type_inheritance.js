'use strict';

class Animal{
  constructor(voice){
    this.voice=voice||'grunt';
  }

  speak(){
    display(this.voice);
  }
}


class Cat extends Animal{
  constructor(name,color){
    super('meoow');
    this.name = name;
    this.color = color;
  }
}


var fluffy = new Cat('Fluffy','white');

fluffy.speak();

display(fluffy);

//Likewise keys of class are not enumerable.

display(Object.keys(Animal)); //Array { }

//whereas

display(fluffy.__proto__.__proto__.hasOwnProperty('speak'));
display(Animal.prototype.hasOwnProperty('speak')); //true since this is a function.