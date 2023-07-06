
function Animal(name) {
    this.name = name;
  }
 
  Animal.prototype.sound = function() {
    console.log("Animal sound");
  };
  
  function Dog(name) {
    Animal.call(this, name);
  }
  
  Dog.prototype = Object.create(Animal.prototype);

  Dog.prototype.sound = function() {
    console.log("Woof!");
  };
  
  const dog = new Dog("Buddy");

  console.log(dog.name); 
  dog.sound(); 
  