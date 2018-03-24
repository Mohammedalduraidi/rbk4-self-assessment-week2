// We've provided `makeHorse` and `makeFlyingHorse` for you, written using the
// functional pattern. Your task is to rewrite these classes to use the
// pseudoclassical pattern. They should have all the same methods as the 
// objects returned from the maker functions except in pseudo classical style. 
// You must be able to use your new functions to create new horse instances, 
// just like this:
//
//   var myHorse = new Horse();
//   var myFlyingHorse = new FlyingHorse();
//

// DO NOT MODIFY FUNCTIONS 'makeHorse' AND 'makeFlyingHorse'
// USE THE CONSTRUCTOR FUNCTIONS LOCATED AT THE END OF THIS FILE
var Horse = function(name) {
  this.name
};

 Horse.prototype.makeHorse = function(name){
  Horse.call(this)
  this.name=name
}
 makeHorse.prototype = Object.create(Horse.prototype)
  makeHorse.prototype.constructor = makeHorse

Horse.prototype.goSomewhere =function(destination){
   return this.name + ' is galloping to ' + destination + '!';
}

makeHorse.prototype.makeFlyingHorse = function(name, color) {
    makeHorse.call(this)
    this.name=name;
    this.color=color;
    this.oldGoSomewhere = this.goSomewhere
    var x = this;
    x.goSomewhere = function(destination, milesToDestination) {
      x.destination = destination
      x. milesToDestination = milesToDestination
     if (x.milesToDestination < 10) {
       return x.oldGoSomewhere(x.destination);
     } else {
       return x.name + ' is flying to ' + x.destination + '!';
     }
  }
 makeFlyingHorse.prototype = Object.create(makeHorse.prototype)

Horse.prototype.FlyingHorse = function(name, color) {
  this.name = name
  this.color = color
 };

 makeFlyingHorse.prototype.constructor = makeFlyingHorse;

  var result = new Horse()
// var makeHorse = function(name) {
//   var result = {};
//   result.name = name;
//   result.goSomewhere = function(destination) {
//     return name + ' is galloping to ' + destination + '!';
//   };
//   return result;
// };

// var makeFlyingHorse = function(name, color) {
//   var result = makeHorse(name);
//   result.color = color;
//   var oldGoSomewhere = result.goSomewhere;
//   result.goSomewhere = function(destination, milesToDestination) {
//     if (milesToDestination < 10) {
//       return oldGoSomewhere(destination);
//     } else {
//       return name + ' is flying to ' + destination + '!';
//     }
//   };
//   return result;
// };

// // YOUR WORK GOES BELOW
// // Here's some starter code to get you going!

// var Horse = function(name) {
// };


// var FlyingHorse = function(name, color) {
// };


