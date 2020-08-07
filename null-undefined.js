//undefined 

let book ;
console.log(book); // value is not set - undefined

function add(num1,num2){
 let result = num1 + num2; // no return value - undefined
}
const total = add(10,20);
console.log(total); 


function add2(num1 ,num2)
{
    console.log(num1 , num2);
    return  // no value after return - undefined
}
const result2 = add2(10); // one parameter is not sent - undefined
console.log(result2);

const person ={name:"tina", contact :"00190"};
console.log(person.job); // property is absent in object - undefined

const job = undefined; // value is set undefined - so undefined
console.log(job);

const pen = null ; // value is set null , it has to be set ! we can't get it without assigning it
console.log(pen);


