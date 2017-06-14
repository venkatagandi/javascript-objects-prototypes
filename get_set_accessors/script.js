'use strict';

var cat = {
  name: {
    first: 'Fluffy',
    last: 'LaBeouf'
  },
  color: 'white'
}

//getter and setters similar to c# or java are used
//to set the values using function
//get will get the value and we can manipulate the
//value in it
//set will set the value post to it.

//suppose we want to create a full name property

//syntax
/*
Object.defineProperty(object,'newpropertyname',{

  get : function(){

  }
  set: function(){

  }
})
*/

Object.defineProperty(cat,'fullname',{
  get: function(){
    return this.name.first + ','+this.name.last;
  },
  set: function(value){
    var nameParts = value.split(' ');
    this.name.first = nameParts[1];
    this.name.last = nameParts[0];

  }
});

cat.fullname = "Muffin Top";
display(cat.fullname);
display(cat.name.first);
display(cat.name.last);










