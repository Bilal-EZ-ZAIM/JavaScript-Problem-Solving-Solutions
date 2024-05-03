
// Chalenge 2 // Sum of Positive

// description 

// You get an array of numbers retun the sum of all of the positives ones

let array = [1, -5, 18, 10, -8, 5];

// Method 1

function Sum_of_positive(array) {

    const result = array.reduce((intialValue, item) => {
        return item > 0 ? intialValue + item : intialValue
    }, 0);

    return result;

}

console.log(Sum_of_positive(array));


// Method 2 
let reusult = 0;
function SumOfPositive(array) {

    for (let i = 0; array.length > i; i++) {

        if (array[i] > 0) {
            reusult += array[i]
        }
    }

    return reusult;

}

console.log(SumOfPositive(array));


// Method 3
function SumOfPositive3(array) {

    const result = array.filter(item => item > 0)
        .reduce((intialValue, item) => intialValue + item , 0);



    return result;

}

console.log(SumOfPositive3(array));
