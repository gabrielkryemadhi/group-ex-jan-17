let data = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

console.log(data);

function sortArray(arr){
  arr.sort((a, b) => a - b);
}

sortArray(data);
console.log(data);


function total(arr){
  let ttl = 0;
  for(i=0; i < arr.length; i++){
  ttl += arr[i]
  }
  return ttl
}

let ttl = total(data)
console.log(ttl)


function isOddorEven(x){
  if(x % 2 === 1){
    console.log("Array is odd");
    return false;
  }
  else{
    console.log("Array is even")
    return true;
  }
}

isOddorEven(ttl)


let odd = []
function extractOdd (arr) {
  for(let i=0; i < arr.length; i++){
    const num = arr[i];
    if(num % 2 === 1){
    odd.push(num)
    }
    }
    console.log(odd)
    return odd;
}

extractOdd(data);

let even = []
function extractEven (arr) {
  for(let i=0; i < arr.length; i++){
    const num = arr[i];
    if(num % 2 === 0){
    even.push(num)
    }
    }
    console.log(even)
    return even;
}

extractEven(data);

function getTheBiggest(arr1, arr2){
  let sum1 = total(arr1);
  let sum2 = total(arr2);
  if (sum1 > sum2){
    return arr1;
  } else{
    return arr2;
  }
}

console.log(getTheBiggest(odd, even))

function multiply(arr, callback){
  for (let i = 0; i < arr.length; i++){
  const num = arr[i];
  arr[i] = callback(num)
  }
}

let byfive = (x) => x * 5;

multiply(data, byfive);
console.log(data);