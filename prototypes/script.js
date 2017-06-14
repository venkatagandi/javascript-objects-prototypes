'use strict';

//prototype is a property that exists on every function in javascript.

var myFunc = function(){

}

display(myFunc.prototype); // { }


//whereas objects donot have prototype property rather they have
//dunder proto

var cat = {name:'fluffy',color:'white'};
display(cat.prototype); //undefined
display(cat.__proto__); // Object { }

function game(year,trend){
  this.year = year;
  this.trend = trend;
}

display(game.prototype);

var cricket = new game(1800,'latest');

display(cricket.__proto__);

display(game.prototype === cricket.__proto__);

game.prototype.sponsor = 'ICC';

display(cricket.__proto__);
display(game.prototype);

var football = new game(1600,'old');

display(football.__proto__);