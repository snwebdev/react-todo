var person1 = ['Bob', 24];
var person2 = ['Charlie', 56];

function hello(name, age){
  return "hello " + name + " you are " + age
};

var names = ["Alfred", "Bernie", "Charles"];
var final = ["Stewart", ...names];
final.forEach (function(name){
  console.log(name);
})
