'use strict'
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Console Binding refers to using this keyword to represent the window object on the global scope
* 2. Implicit Binding refers calling a function with a dot the this refers to the object before the dot
* 3. New Binding refers to when a constructor function is used the this keyword refers to the instance of the object
* 4. Explicit Binding are used when bind, call, apply objects are used this is defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowBinding (name){
    console.log(this);
    return name
}
console.log(windowBinding())
  
// Principle 2

// code example for Implicit Binding
const implicitBinding = {
    name: 'John',
    implicit: function(year) {
        return `Hello ${this.name} this is Implicit Binding I wrote in ${year}`
    }
}

console.log(implicitBinding.implicit(2019))

// Principle 3

// code example for New Binding

function NewBinding (name,time) {
    this.name = name;
    this.time = time;
    this.message = function(time) {
        if (this.time <= time) {
            return `Hello ${this.name} its ${this.time} thats Pay time!!!`
        } else return `Hello ${this.name} its ${time} not pay time`
    } 
}

const femi = new NewBinding('Femi', 10)
console.log(femi.message(7))

// Principle 4

// code example for Explicit Binding
function Person (name,dob) {
    this.name = name;
    this.dob = dob;
    this.howManyDecade = function (year) {
        this.toDecade = (year - dob) /10;
        return `${this.name} have lived ${this.toDecade}`
    }
}

const benjamin = new Person('Ben', 1995);
const benDecade = benjamin.howManyDecade;
console.log(benDecade.call(benjamin,2019))
