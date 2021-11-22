//#4.1.1

const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

function currentSums(numbers) {

   const result = [];

   numbers.reduce((accumulator, currentValue, index) => {
        return result[index] = accumulator + currentValue;
    }, 0);

  console.log(result)
};

currentSums(numbers)


//#4.1.2
const str = "Каждый охотник желает знать, где сидит фазан."; 

function firstChar(str) {
    
    const arr = str.split(' ');
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].substr(0,1))
    };

    console.log(newArr);
};


firstChar("Каждый охотник желает знать, где сидит фазан.");

//#4.1.3

function changeArray(arr) {
    let reverseArr =[];
    
        if (arr.length % 2 == 0) {
            let leftSideArr = arr.slice(0, arr.length/2);
            let rightSideArr = arr.slice(arr.length/2);

            reverseArr = rightSideArr.concat(leftSideArr);

        } else {
         let centerChar = arr[Math.ceil(arr.length/2)-1];
         let leftSideArr = arr.slice(0, centerChar -1);
         let rightSideArr = arr.slice(centerChar);

         reverseArr = rightSideArr.concat(centerChar).concat(leftSideArr);

        };

    console.log(reverseArr);
};

changeArray([1, 2, 3, 4, 5, 6])