'use strict';

let allStoresArr = [];
let totalsPerHour = [];
let total = 0;

function Store(location, minCustomerPerHour,maxCustomerPerHour,avgCookiesPerCustomer){
  this.location = location;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHour = [{time:'0600'},{time:'0700'},{time:'0800'},{time:'0900'},{time:'1000'},{time:'1100'},{time:'1200'},{time:'1300'},{time:'1400'},{time:'1500'},{time:'1600'},{time:'1700'},{time:'1800'},{time:'1900'},{time:'2000'}];
  this.totalCookies = null;

  generateAllSales(this);
  allStoresArr.push(this);
  appendData(this);
}

function generateAllSales(store){
  let min = store.minCustomerPerHour;
  let max = store.maxCustomerPerHour;
  for(var i = 0; i < store.cookiesPerHour.length; i++){
    let cookies = Math.floor((Math.random() * (max - min + 1) + min) * store.avgCookiesPerCustomer);
    store.cookiesPerHour[i].sales = cookies;
    store.totalCookies += cookies;
    total += cookies;
    if(!totalsPerHour[i]){
      totalsPerHour.push(cookies);
    }else{
      totalsPerHour[i] += cookies;
    }
  }
}

function appendData(store){
  let table = document.getElementById('table');
  let row = document.createElement('tr');
  let location = document.createElement('td');
  let locationData = document.createTextNode(store.location);
  location.appendChild(locationData);
  row.appendChild(location);
  for(var i = 0; i<store.cookiesPerHour.length; i++){
    let td = document.createElement('td');
    let node = document.createTextNode(store.cookiesPerHour[i].sales);
    td.appendChild(node);
    row.appendChild(td);
  }
  let total = document.createElement('td');
  let totalData = document.createTextNode(store.totalCookies);
  total.appendChild(totalData);
  row.appendChild(total);
  table.appendChild(row);
}

function createTableHeader(){
  var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];
  var table = document.getElementById('table');
  var header = document.createElement('thead');
  var headerRow = document.createElement('tr');
  headerRow.appendChild(document.createElement('th').appendChild(document.createTextNode('Location')));
  for(var i = 0; i<hours.length;i++){
    var cell = document.createElement('th');
    cell.appendChild(document.createTextNode(hours[i]));
    headerRow.appendChild(cell);
  }
  headerRow.appendChild(document.createElement('th').appendChild(document.createTextNode('Totals')));
  header.appendChild(headerRow);
  table.appendChild(header);
  
}

function createTableFooter(){
  var table = document.getElementById('table');
  var footer = document.createElement('tfoot');
  var footerRow = document.createElement('tr');
  footerRow.appendChild(document.createElement('td').appendChild(document.createTextNode('Totals')));
  for(var i = 0; i<totalsPerHour.length;i++){
    var cell = document.createElement('td');
    cell.appendChild(document.createTextNode(totalsPerHour[i]));
    footerRow.appendChild(cell);
  }
  footerRow.appendChild(document.createElement('td').appendChild(document.createTextNode(total)));
  footer.appendChild(footerRow);
  table.appendChild(footer);
}

function renderAll(){
  new Store('Alki', 2, 16, 4.6);
  new Store('Seatac', 3, 24, 1.2);
  new Store('Capitol Hill', 20, 38, 2.3);
  new Store('Seattle Center', 11, 24, 3.7);
  new Store('First & Pike',23, 65, 6.3);

  createTableHeader();
  createTableFooter();
}

renderAll();


