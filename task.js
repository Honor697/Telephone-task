class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

//adds the phone number to PhoneNumber array
AddPhoneNumber(phoneNumber) {
  this.phoneNumbers.push(phoneNumber);
}

//removes the phone number from the phoneNumber array
RemovePhoneNumber(phoneNumber) {
  this.phoneNumbers = this.phoneNumbers.filter(
    (number) => number !== phoneNumber
  );
}

DialPhoneNumber(phoneNumber) {
  if (this.phoneNumbers.includes(phoneNumber)) {
    this.notifyObservers(phoneNumber);
  }
}

addObserver(observer) {
  this.observers.push(observer);
}

remoteObserver(observer) {
  this.observers = this.observers.filter((ins) => ins !== observer);
}

notifyObservers(phoneNumber) {
  this.observers.forEach((obs) => obs.update(phoneNumber));
}
}

class Observer {
  update(phoneNumber) {}
}

class PrintPhoneNum extends Observer {
  update(phoneNumber) {
    console.log(phoneNumber);
  }
}

class DialingObserver extends Observer {
  update(phoneNumber) {
    console.log("Now Dialing", phoneNumber);
  }
}

const telephone = new Telephone();
telephone.AddPhoneNumber("2347023232");
//this will add the phone to the phone number array

const printObserver = new PrintPhoneNumber();
const dialingObserver = new DialingObserver();

telephone.addObserver(printObserver);
telephone.addObserver(dialingObserver);

telephone.DialPhoneNumber("2347023232");
//Output: 2347023232
//output: Now Dialing 234702323