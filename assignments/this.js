/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global Object Binding:

 Window Binding - this is the global object of whatever is bound to "THIS". this is the most overall binding.

* 2. Implicit Binding 

Implicit binding might be the most common form of this. In this case, when a function is called it looks to the left of the dot to see what object it should be looking to when it's invoked.

* 3. New Binding

New binding uses a constructor. When you create a new object, you base it off the constructor by using this "New" keyword binding

* 4. Explicit binding

This is useful for when you want to run the same function on numerous objects and would like to only write it out once. You can use .call() to invoke it on the object you wish. It is built outside and seperately from the inside of objects which helps with the "DRY" concept.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function myName(name) {
        console.log(this);
        return name;
    }
    
myName("Kevin")

// Principle 2

// code example for Implicit Binding

const myGreeting = {
        greeting: 'Hello',
        sayHello: function(name) {
            console.log(`${this.greeting} my name is ${name}`);
        }
    };
    
myGreeting.sayHello('Kevin');



// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
        this.greeting = 'Hello';
        this.greeter = greeter;
        this.speak = function() {
            console.log(this.greeting + this.greeter);
            console.log(this);
        };
    }
    
    const Kevin = new CordialPerson('Nick');
    const Nick = new CordialPerson('Kevin');
    
    Kevin.speak();
    Nick.speak();

// Principle 4

// code example for Explicit Binding

function CordialPerson(greeter) {
        this.greeting = 'Hello';
        this.greeter = greeter;
        this.speak = function() {
            console.log(this.greeting + this.greeter);
            console.log(this);
        };
    }
    
    const K = new CordialPerson('Nick');
    const N = new CordialPerson('Kevin');
    
    K.speak.call(Nick);
    N.speak.apply(Kevin);