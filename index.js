/*
TASK 1 🚀
// in your own words explain what a closure is below in comments and then write an example of a closure. Try to make this explaination simple enough to explain to a younger sibling. */

/*Its like toys in a doll house all the toys inside can play both inside and outside the house but the toys outside cant come in and play!
*/



/*
TASK 2 🚀
// look at the code below and explain in your own words where the variable 'count' is available. 
// Explain why 'count' is initialized with a let and not a var or const. 
// Explain how initalizing the variable 'count' with a var would change it's scope
*/
function counterMaker() {
    let count = 0;
    return function counter() {
     return count++;
    }
  }
//count is initialized with let because it is block scope  as well is const but const is immutable unlike var which is //function scoped will reach outside of the function





/*
TASK 3 🚀
* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If it dosent fall in with any oter rule then "this" will default to window unless using strict mode
* 2. When the fucntion is invoked, look to the left of the dot that is what "this" refers to only to object w/ methods
* 3. using the 'new keyword contructs a new object and 'this points to it
* 4. when using call or apply method "this" is clearly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
   'use strict';

   function ghost(){
     console.log(this.boo);
   }
   const boo = 'boo'
   ghost();

// Principle 2

// code example for Implicit Binding
const myGhost = {
   name: 'Casper',
   boo: 'booBoo',
   ghost: function(){
    console.log(this.boo);
    }
   }
  
   myGhost.ghost();


// Principle 3

// code example for New Binding
function Ghost(saying, name){
  this.phrase = saying;
  this.name = name;

}
const mySpook = new Ghost ('Guess who is coming to dinner', 'Beetlejuice');

console.log(mySpook.phrase);
console.log(mySpook.name);



// Principle 4

// code example for Explicit Binding
  function jerk(){
    console.log(this.jerk);
  }
  
    const myJerk = {
      name : 'Finn',
      jerk: 'Shelly',
    }
  
  const otherJerk = {
    name : 'Fatso',
    jerk: 'MeanBoo',
  }
  
  jerk.call(myJerk);
  jerk.call(otherJerk);






/*
TASK 4 🚀
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attrs){
  this.createdAt = attrs.createdAt;
  this.name = attrs.name;
  this.dimensions = attrs.dimensions
   
}
GameObject.prototype.destroy =  function(){
  return `${this.name} was removed from the game`;
}


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attrs){
  GameObject.call(this,attrs);
  this.healthPoints = attrs.healthPoints;

}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`;
}
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string ''<object name> took damage.''
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(attrs){
  CharacterStats.call(this,attrs);
  this.team = attrs.team;
  this.weapons = attrs.weapons;
  this.language = attrs.language;

}
Humanoid.prototype = Object.create(CharacterStats.prototype); 
Humanoid.prototype.greet = function (){
  return `${this.name} took damage.`;

}
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.







/*
TASK 5 🚀
// convert the constructor functions above to class syntax copy and paste the objects and console logs below the class syntax to test if your code is working
*/
  /*function GameObject(attrs){
    this.createdAt = attrs.createdAt;
    this.name = attrs.name;
    this.dimensions = attrs.dimensions;

    function CharacterStats(attrs){
  GameObject.call(this,attrs);
  this.healthPoints = attrs.healthPoints;


    

    function Humanoid(attrs){
      CharacterStats.call(this,attrs);
      this.team = attrs.team;
      this.weapons = attrs.weapons;
      this.language = attrs.language;
    */
     class GameObject{
        constructor(attrs){
          this.createdAt = attrs.createdAt;
          this.name = attrs.name;
          this.dimensions = attrs.dimensions;
        }
      speak(){
         return `${this.name} was removed from the game`;
      }
      }
      
      class CharacterStats extends GameObject{
        constructor(attrs){
          super(attrs)
          this.healthPoints = attrs.healthPoints;
        }
        speak(){
          return `${this.name} took damage.`;
        }
      }

      class Humanoid extends CharacterStats{
        constructor(attrs){
          super(attrs)
          this.team = attrs.team;
          this.weapons = attrs.weapons;
          this.language = attrs.language;
        }
        speak(){
          return `${this.name} took damage.`
        }
      }