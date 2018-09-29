function sumItems(array) {
  // Sum all the numbers in the array
  let result = 0;
  while (array.length > 0) {
    const element = array.shift();

    if (Array.isArray(element)) {
      result += sumItems(element);
    } else {
    	result += element;
      	console.log(element);
    }

  }
  return result;
}

module.exports = sumItems;