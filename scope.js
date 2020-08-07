let bonus = 10 ;

function add(first, second) {
    let result = first + second +bonus ;
    console.log(bonus); // bonus has global scope , it can be accessed from the function
    console.log(result);

 if ( result >10)
 {
     let betterResult = 1000 ;
     console.log(betterResult);
     var betterResult2 =5000;
     console.log(betterResult2);
 }    
 // console.log(betterResult); -> not accessible , with let or const 
 console.log(betterResult2); // it's accessible
    return result;
    
}
let result = 30 ; // this result variable is different from the function's result variable
 console.log(result);


const output = add (20,30);
//console.log(result); -> it will produce error as its scope is within the add function
console.log(output);




 

