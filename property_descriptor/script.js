'use strict';

var cat = {
  name:'fluffy',
  color:'white'
}

//we can get property descriptor value through the below stuff

display(Object.getOwnPropertyDescriptor(cat,'name'));

//the above is something that got create as a part of

/*
var cat = Object.create(Object,{
  name:{
    value:'fluffy',
    writable:true,
    configurable:true,
    enumerable:true
  },
  color:{
    value:'white',
    writable:true,
    configurable:true,
    enumerable:true
  }
});

display(Object.getOwnPropertyDescriptor(cat,'name'));
*/