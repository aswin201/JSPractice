const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  function greet(message, punctuation) {
    console.log(message + ' ' + this.fullName() + punctuation);
  }
  
  // Using call
  greet.call(person, 'Hello', '!'); // Output: Hello John Doe!
  
  // Using apply
  const message = ['Hola', '!'];
  greet.apply(person, message); // Output: Hola John Doe!
  
  // Using bind
  const boundGreet = greet.bind(person, 'Hi');
  boundGreet('!!!'); // Output: Hi John Doe!!!
  