/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  var first = 0;
  var second = 1;
  var fibArray = [];

  while (first + second <= maxFibValue) {
    var nextNum = first + second;
    fibArray.push(nextNum);
    first = second;
    second = nextNum;
  }
 for (var i = 0; i < fibArray.length; i++) {
    if (fibArray[i] % 2 === 0) {

     sum += fibArray[i];
    }
 }




  // do your work here

  return sum;
}
console.log(_sumFibs(10));


// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input
  var sum = 0;
  var first = 0;
  var second = 1;
  var fibArray = [];

  while (first + second <= maxFibValue) {
    var nextNum = first + second;
    fibArray.push(nextNum);
    first = second;
    second = nextNum;
  }
  if (maxFibValue === fibArray[fibArray.length -1]) {
    return fibArray[fibArray.length -2];
  } else {
    highest = fibArray[fibArray.length -1];
  }

  //do your work here

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};

