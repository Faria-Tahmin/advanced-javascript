
// num =0 -> false , otherwise true
const num = 0;
if(num)
{
    console.log("The condition is true");
}
else 
console.log("The condition is false");

// string = sth or " " empty space or 'false' -> true , otherwise empty string or false or NaN/ null ->false
const name = 'false';
if(name)
{
    console.log("The condition is true");
}
else 
console.log("The condition is false");

// undefined -> false
let name2;
if(name2)
{
    console.log("The condition is true");
}
else 
console.log("The condition is false");


// empty array true
const array =[];
if(array)
{
    console.log("The condition is true");
}
else 
console.log("The condition is false");
//empty object true
const object ={}
if(object)
{
    console.log("The condition is true");
}
else 
console.log("The condition is false");