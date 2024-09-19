// problem no-1.........
function calculateDifferece(num1, num2){
    let differ = num1- num2;
    return (`the defarace is two number is: ${differ}`);
}
console.log(calculateDifferece(20,10));



// problem no-2.........

function isOdd(oddNumber){
    if(oddNumber % 2==1){
        return true;
    } else {
        return false;
    }
}
console.log(isOdd(25));


// problem no-3.........

let numbers = [3, 4,6, 8, 24, 5, 7, 31,  68];

function mathMin(num){
   let result = Math.min(...num);
   return result;
}

console.log(mathMin(numbers));


// problem no-4.........

let array = [3, 4,6, 8, 24, 5, 7, 31,  68];

function filterEvenNumbers(value){
    let result = value % 2==0;
    return result;
}
console.log(array.filter(filterEvenNumbers));


// problem no-5............

let array2 = [1, 2, 3, 4,5,6, 7, 8, 9,];

function sortArrayDescending(sortNumber){
    const result = sortNumber.sort().reverse();
    return result;
}
console.log(sortArrayDescending(array2));



// problem no-6............

const array3 = ["Hello"];
function lowercaseFirstLetter(input){
    input.splice(0,1, "hello");
    return input;
}

console.log(lowercaseFirstLetter(array3));


// problem no-8............

let array4 = [3, 4, 5, 6, 7, 8, 9, 10,];

function findAverage(number){
    let total = 0;
    for(let  i = 0; i < number.length; i++){
        total += number[i]; 
        
    }
    return total/number.length;
};
console.log(findAverage(array4));





















