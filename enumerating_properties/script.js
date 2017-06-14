'use strict';

var cat = {
  name:{first:'Fluffy',last:'LaBeouf'},
  color:'white'
}

//we can get the property values in the object using for in loop

for(var propname in cat){
  display(propname); //displays name and color
}

//we can also get the value using bracket notation

/*
for(var prop in cat){
  display('key - ' + prop + ' , value - '+ cat[prop]);
}*/

//syntax - Object.keys(objectname) - returns an array and we can traverse through those.
display(Object.keys(cat));

//now to test enumerable if we make enumerable:false see what happens
/*
Object.defineProperty(cat,'name',{enumerable:false});

for(var prop in cat){
  display('key - ' + prop + ' , value - '+ cat[prop]);
}*/

//the above just prints only color property values.

//JSON.stringify(cat); //if we make enumerable of any property false then it will
//impact the json stringify stuff.