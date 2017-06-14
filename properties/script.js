'use strict';

var cat = {
  name:'fluffy',
  color:'white'
}

/*
we cannot do this as it is static
var cc =  new cat();

display(cc.name);

*/

display(cat.name);
display(cat['color']);