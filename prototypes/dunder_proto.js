'use strict';


var myFunc = function(){

};

display(myFunc.prototype); //return empty object

var cat = {
  name:'fluffy'
};

display(cat.__proto__);//retrns object{ }

//but static object donot have .prototype
//meaning
//display(cat.prototype) //will throw error.