 const numbers=[1,2,3,4];
// const output=[];

// for(let i=0 ;i< numbers.length ; i++)
// {
//     const element = numbers[i];
//     const result = element * element ;
//     output.push(result);

// }

// console.log(numbers);
// console.log(output);

// function square (element){
//     return element * element;
// }
// const result2 = element => element * element ;
// const result3 = x=> x * x ;
 numbers.map(function(element,index,array){
     console.log(element,index,array);
 })



const output2 = numbers.map(function(element){
    return element * element ;
})
console.log(output2);

const output3 = numbers.map (x => x*x)
console.log(output3);

const finding = numbers.find(x=> x%2==0)
console.log(finding);

const filtering = numbers.filter(x=> x%2==0)
console.log(filtering);
console.log(...filtering);

