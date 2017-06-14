'use strict';

var arr = [1,2,3,4,5];

display(arr[arr.length-1]);

Object.defineProperty(Array.prototype,'last',{get:function(){
 return this[this.length-1];
}
});

display(arr.last);

var arr2 = [2,3,4,5];
display(arr2.last);
display(Array);

