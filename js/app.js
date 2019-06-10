'use strict';

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:

// 1st and Pike

// 6am: 16 cookies
// 7am: 20 cookies

var firstPike = {
  location: 'First and Pike',
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  cookiesPerHour: [{time:'6am'},{time:'7am'},{time:'8am'},{time:'9am'},{time:'10am'},{time:'11am'},{time:'12pm'},{time:'1pm'},{time:'2pm'},{time:'3pm'},{time:'4pm'},{time:'5pm'},{time:'6pm'},{time:'7pm'},{time:'8pm'}],
  totalCookies: null,
  generateRandom: function(){
    var min = this.minCustomerPerHour;
    var max = this.maxCustomerPerHour;
    var num = Math.floor(Math.random() * (max - min + 1)) + min;

    return num;
  },

};

var seaTac = {
  location: 'Seatac',
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  cookiesPerHour: [{time:'6am'},{time:'7am'},{time:'8am'},{time:'9am'},{time:'10am'},{time:'11am'},{time:'12pm'},{time:'1pm'},{time:'2pm'},{time:'3pm'},{time:'4pm'},{time:'5pm'},{time:'6pm'},{time:'7pm'},{time:'8pm'}],
  totalCookies: null,
  generateRandom: function(){
    var min = this.minCustomerPerHour;
    var max = this.maxCustomerPerHour;
    var num = Math.floor(Math.random() * (max - min + 1)) + min;

    return num;
  },

};

var seattleCenter = {
  location: 'Seattle Center',
  minCustomerPerHour: 11,
  maxCustomerPerHour: 24,
  avgCookiesPerCustomer: 3.7,
  cookiesPerHour: [{time:'6am'},{time:'7am'},{time:'8am'},{time:'9am'},{time:'10am'},{time:'11am'},{time:'12pm'},{time:'1pm'},{time:'2pm'},{time:'3pm'},{time:'4pm'},{time:'5pm'},{time:'6pm'},{time:'7pm'},{time:'8pm'}],
  totalCookies: null,
  generateRandom: function(){
    var min = this.minCustomerPerHour;
    var max = this.maxCustomerPerHour;
    var num = Math.floor(Math.random() * (max - min + 1)) + min;

    return num;
  },

};

var capitolHill = {
  location: 'Capitol Hill',
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  cookiesPerHour: [{time:'6am'},{time:'7am'},{time:'8am'},{time:'9am'},{time:'10am'},{time:'11am'},{time:'12pm'},{time:'1pm'},{time:'2pm'},{time:'3pm'},{time:'4pm'},{time:'5pm'},{time:'6pm'},{time:'7pm'},{time:'8pm'}],
  totalCookies: null,
  generateRandom: function(){
    var min = this.minCustomerPerHour;
    var max = this.maxCustomerPerHour;
    var num = Math.floor(Math.random() * (max - min + 1)) + min;

    return num;
  },

};

var alki = {
  location: 'Alki',
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookiesPerCustomer: 4.6,
  cookiesPerHour: [{time:'6am'},{time:'7am'},{time:'8am'},{time:'9am'},{time:'10am'},{time:'11am'},{time:'12pm'},{time:'1pm'},{time:'2pm'},{time:'3pm'},{time:'4pm'},{time:'5pm'},{time:'6pm'},{time:'7pm'},{time:'8pm'}],
  totalCookies: null,
  generateRandom: function(){
    var min = this.minCustomerPerHour;
    var max = this.maxCustomerPerHour;
    var num = Math.floor(Math.random() * (max - min + 1)) + min;

    return num;
  },

};

//Hours open === 15
function generateAllSales(store){
  for(var i = 0; i < store.cookiesPerHour.length; i++){
    let cookies = Math.floor(store.generateRandom() * store.avgCookiesPerCustomer);
    store.cookiesPerHour[i].sales = cookies;
    store.totalCookies += cookies;
  }
}
generateAllSales(alki);
generateAllSales(seaTac);
generateAllSales(seattleCenter);
generateAllSales(capitolHill);
generateAllSales(firstPike);


console.log(alki,seattleCenter,seaTac,capitolHill,firstPike);
