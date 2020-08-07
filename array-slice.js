const number = [0,1,2,3,4,5,6];

// use of slice , starting index to ending index , nothing happens to original array
const part = number.slice( 2,5);
console.log(part);
console.log(number);


// use of splice , starting index to count , original array will be changed after splicing

//let removed = number.splice( 4 , 2);
let removed = number.splice( 2 , 2 , 100 , 200 , 300);
console.log(removed);
console.log(number);


// use of join
const together = number.join (" _,"); 
console.log(together);

