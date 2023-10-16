"use strict";

const businessAccount = {
  capital: 1000,
  balance: 1000,

  makeSale: function (amount) {
    this.balance += amount;
  },
  getBal: function () {
    return this.balance;
  },
  updatedCapital: function (newCapital) {
    this.capital = newCapital;
  },
};
console.log("first capital:", businessAccount.capital);
console.log("first balance:", businessAccount.getBal());

businessAccount.makeSale(500);
console.log("New Balance:", businessAccount.getBal());

businessAccount.updatedCapital(1500);
console.log("Updated Capital:", businessAccount.capital);
