// implement separate payment strategies
// these could also be classes

const paypalPayment = {
  // a bunch of other logic that may be required
  pay: (amount) => {
    return { status: "success", method: "paypal", amount: amount };
  },
};

const creditCardPayment = {
  // a bunch of other logic that may be required
  pay: (amount) => {
    return { status: "success", method: "credit card", amount: amount };
  },
};

// implement the payment class

class Checkout {
  constructor(strategy) {
    this.strategy = strategy;
  }

  processPayment(amount) {
    return this.strategy.pay(amount);
  }
}

// now you can add or modify any pament methods and they'll work as long as they have the pay method & return the same shape of object.
const checkout = new Checkout(paypalPayment);
console.log(checkout.processPayment(100));
checkout.strategy = creditCardPayment;
console.log(checkout.processPayment(500));
