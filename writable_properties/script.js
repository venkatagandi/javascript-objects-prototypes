'use strict';



var cat = {
  name: 'fluffy',
  color: 'white'
}

////we can change the property descriptor defenition using Object.defineProperty

/*
syntax
Object.defineProperty(object,'propertyname',{writable/configurable/enumerable:true/false});
*/

//Object.defineProperty(cat,'name',{writable:false});

//display(Object.getOwnPropertyDescriptor(cat, 'name'));

////cat.name = "glupy" //will throw an error as the property is writable.
////this occurs only in strict mode.

//suppose we have this

var superhero ={
  name:{firstname:'iron',lastname:'man'},
  age:30
}

display(superhero.name);

//suppose i do

Object.defineProperty(superhero,'name',{writable:false});

superhero.name.lastname="kingo";

display(superhero.name); //see it changed to macho eventhough name writable:false

//the reason is name is pointing to another object not the value.

//inorder to make the name object freeze completely we use

Object.freeze(superhero.name);

superhero.name.lastname="macho";
display(superhero.name);//will not change and throw error.












