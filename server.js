var customers = require('./source/customers.json');
var orders = require('./source/orders.json');

//function that takes in an array and returns a unique object where key is the oJoin value
//(ie: customer_id) while value is the summed up amount based on the argument
//total (ie. price)
function group(array){
  const obj = {};
  for(var i = 0 ; i < array.length ; i++){
    obj[array[i].cid] = array[i]
  }
  return obj;
}

//function that finds all instances where a customer
//exists in both orders and customers
function combineInner(array, obj){
  const finalArray = [];
  array.forEach(person => {
    if(obj.hasOwnProperty(person.customer_id)){
      const connect = Object.assign({},obj[person.customer_id], person)
      finalArray.push(connect)
    }
  })
  return finalArray
}

//function that finds all records
//1. customer exists in both orders and customers
//2. customer exists in orders but not customers
//3. customer exists in customers but not orders
function combineOuter(array,obj){
  const finalArray = [];
  const foundIndex = [];
  // loops through the orders array
  array.forEach(person => {
    //finds all instances where cid in customers match up with customer_id in orders
    if(obj.hasOwnProperty(person.customer_id)){
      const connect = Object.assign({},obj[person.customer_id], person)
      finalArray.push(connect)
      obj[person.customer_id].found = true;
    }else {
    // adds instances where cid/customer_id exists in orders but not in customers
      const connect2 = Object.assign({}, {cid: null, name: null}, person)
      finalArray.push(connect2);
    }
  })
  for(var key in obj){
    // adds instances where cid/customer_id exists in customers but not in orders
    if(!obj[key].found){
      const connect3= Object.assign({},{cid: obj[key].cid, name: obj[key].name}, {oid: null, customer_id: null, price: null});
      finalArray.push(connect3)
    }
  }
  return finalArray
}

//function that finds the total amount spent on
//orders between Steve and Barry
function BSfilter(array){
  let total = 0;
  array.forEach(person => {
    if(person.name === 'Barry' || person.name === 'Steve'){
      total += person.price;
    }
  })
  return total;
};

var inner = combineInner(orders, group(customers));
var outer = combineOuter(orders, group(customers));

console.log('Steve and Barry spent $', BSfilter(inner));
console.log('Inner Join', JSON.stringify(inner,null,2));
console.log('The resulting inner join has an array with length of', inner.length);
console.log('Outer Join', JSON.stringify(outer,null,2));
console.log('The resulting outer join has an array with length of', outer.length)
