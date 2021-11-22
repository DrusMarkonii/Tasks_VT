function compress(str) {

  let string = str.split("");
  let counter = 1;
  let compString = string.reduce((accumulator, currentValue, currentIndex, array) => {

          if (currentValue === array[currentIndex + 1]) {
            counter++;

            return accumulator;
          } else {
            accumulator += (currentValue + counter);
            counter = 1;

            return accumulator;
            }
    }, "");

  console.log(compString);
};


  
function uncompress(str) {

  let string = str.split("");
  let decompString = string.reduce((accumulator, currentValue, currentIndex, array) => {
  
    let parseValue = parseInt(currentValue);

    if (!isNaN(parseValue)) {
      accumulator += Array(parseValue + 1).join(array[currentIndex - 1]);
    }

    return accumulator;
  }, "");

  console.log(decompString);
};
  


compress("aaabbcc");
uncompress("a2b3c5a3");


