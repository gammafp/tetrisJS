
var a = [
    [0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1]
];

Array.prototype.unique=function(a){
  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

console.log(a[2].unique());
console.log(a);
