'use strict';

class Cat {
  constructor(name,color){
    this.name=name;
    this.color=color;
  }

  speak(){
    display('meeow');
  }
}

var cat = new Cat('fluffy','white');

display(cat);

cat.speak();