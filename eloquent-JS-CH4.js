function range (start, end) {
  var newArr = []
  for (var i = start; i <= end; i++) {
    newArr.push(i);
  }
  return newArr;
}

//range (2, 5); --> [2,3,4,5]

function sum(numArr) {
var sum = numArr.reduce(function(total, value){
  return total += value;
});
return sum;
}

//sum([1,2,3,4,5,6,7,8,9,10]); --> 55

function range (start, end, step) {
  var newArr = []
  // if step is not passed in as argument set to 1
  if (arguments.length < 3) {step = 1;}
  // if step is negative
  if (step < 0) {
    for (var i = start; i >= end; i += step) {
    newArr.push(i);
  }

  }
  // for regular cases
  for (var i = start; i <= end; i += step) {
    newArr.push(i);
  }
  return newArr;
}

// range (5, 2, -1); --> [5, 4, 3, 2]

function reverse(array) {
  var reversedArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
}

reverse(['A','B','C']);

function reverseInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var holdOn = array[i]
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = holdOn;
  }
  return array;
}

//reverseInPlace([1,2,3,4,5]); --> [5, 4, 3, 2,1]

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

// var array = [1,2,3];
// arrayToList(array); --> //{ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {

    array.push(node.value);
  }
  return array;
}

// var list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
// listToArray(list); // [1,2,3]

function prepend(value, list) {
  return {value: value, rest: list};
}

// prepend(10, prepend(20, null));

function nth(list,n) {

  for (var node = list; node; node = node.rest) {
    // console.log('***begin of node***');
    // console.log(node);
    // console.log(' ');
    if (!list) return undefined;
    else if (n === 0) {
      // console.log('***n === 0*** ')
      // console.log(node.value);
      return node.value
    }
    else {
      // console.log('***begin of node.rest***');
      // console.log(node.rest);
      // console.log(' ');
      // console.log(' ');
      return nth(node.rest, n - 1);
    }
  }
}

// nth(arrayToList([10, 20, 30]), 2); // --> 20

function deepEqual(a,b) {
  if (a === b) return true;

  if (a === null || b === null){
    return false;
  }

  if(typeof a === 'object' && typeof b === 'object'){

    var keys1 = Object.keys(a);
    var keys2 = Object.keys(b);

    //checks if number of keys are equal
    if(keys1.length !== keys2.length){
      return false;
    }

    for(var i in a){ //iterate over keys
      if(deepEqual(a[i], b[i]) === false){ //check if values are equal
        return false;
      }
    }
    return true; //if all keys and values are equal
  }

  //otherwise just return false.
  return false;
}

var obj = {here: {is: "an"}, object: 2};

deepEqual(obj, obj);
// → true
//deepEqual(obj, {here: 1, object: 2});
// → false
//deepEqual(obj, {here: {is: "an"}, object: 2});
// → true
