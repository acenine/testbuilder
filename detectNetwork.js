// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefix2 = cardNumber.slice(0, 2);
  var prefix4 = cardNumber.slice(0, 4);
  var prefix6 = cardNumber.slice(0, 6);
  var numLength = cardNumber.length;

  if (((prefix6 >= 622126 && prefix6 <= 622925) || (prefix4 >= 6240 && prefix4 <= 6260) || (prefix4 >= 6282 && prefix4 <= 6288)) && (numLength >= 16 && numLength <= 19)) {
  	return "China UnionPay"
  };
  if ((["4903", "4905", "4911", "4936", "6333", "6759"].includes(prefix4) || prefix6 === "564182" || prefix6 === "633110") && (numLength === 16 || numLength === 18 || numLength === 19)) {
  	return "Switch"
  };
  if (numLength === 14 && (prefix2 === "38" || prefix2 === "39")) {
  	return "Diner's Club"
  };
  if (numLength === 15 && (prefix2 === "34" || prefix2 === "37")) {
  	return "American Express"
  };
  if ([13, 16, 19].includes(numLength) && prefix2[0] === '4') {
  	return "Visa"
  };
  if (["51", "52", "53", "54", "55"].includes(prefix2) && numLength === 16) {
  	return "MasterCard"
  };
  if ((prefix4 === "6011" || (prefix4 >= 6440 && prefix4 < 6600)) && (numLength === 16 || numLength === 19)) {
  	return "Discover"
  };
  if (["5018", "5020", "5038", "6304"].includes(prefix4) && (numLength >= 12 && numLength <= 19)) {
  	return "Maestro"
  };
};


