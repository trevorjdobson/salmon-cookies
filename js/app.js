'use strict';

let allStoresArr = [];

function Store(location, minCustomerPerHour,maxCustomerPerHour,avgCookiesPerCustomer){
  this.location = location;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHour = [{time:'6am'},{time:'7am'},{time:'8am'},{time:'9am'},{time:'10am'},{time:'11am'},{time:'12pm'},{time:'1pm'},{time:'2pm'},{time:'3pm'},{time:'4pm'},{time:'5pm'},{time:'6pm'},{time:'7pm'},{time:'8pm'}];
  this.totalCookies = null;

  generateAllSales(this);
  allStoresArr.push(this);
  appendData(this);
}

function generateRandom(min,max){
  var num = Math.floor(Math.random() * (max - min + 1)) + min;

  return num;
}

function generateAllSales(store){
  console.log(store);
  for(var i = 0; i < store.cookiesPerHour.length; i++){
    let cookies = Math.floor(generateRandom(store.minCustomerPerHour,store.maxCustomerPerHour) * store.avgCookiesPerCustomer);
    store.cookiesPerHour[i].sales = cookies;
    store.totalCookies += cookies;
  }
}

function appendData(store){
  let container = document.getElementById('stores');
  let heading = document.createElement('h2');
  let headingText = document.createTextNode(store.location);
  heading.appendChild(headingText);
  container.appendChild(heading);

  let salesData = document.createElement('ul');
  container.appendChild(salesData);

  for(var i = 0; i<store.cookiesPerHour.length; i++){
    let listItem = document.createElement('li');
    let listData = document.createTextNode(`${store.cookiesPerHour[i].time}: ${store.cookiesPerHour[i].sales}`);
    listItem.appendChild(listData);
    salesData.appendChild(listItem);
  }
  let totalSalesItem = document.createElement('li');
  let totalSalesData = document.createTextNode(`Total: ${store.totalCookies}`);
  totalSalesItem.appendChild(totalSalesData);
  salesData.appendChild(totalSalesItem);
}

//Create new stores
var alki = new Store('Alki', 2, 16, 4.6);
var seaTac = new Store('Seatac', 3, 24, 1.2);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var seattleCenter = new Store('Seattle Center', 11, 24, 3.7);
var firstPike = new Store('First & Pike',23, 65, 6.3);

