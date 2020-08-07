//using double equal , only value check
const num1 = 5;
const num2 = '5' ;
if( num1 == num2)
{
    console.log("The condition is true");
}

else
{
    console.log("The condition is false");
}
// using triple equal , both value and type checked
const num3 = 5;
const num4 = '5' ;
if( num3 === num4)
{
    console.log("The condition is true");
}

else
{
    console.log("The condition is false");
}
//using double equal -> it thinks 1== true and 0 == false

const num5 = 1;
const num6 = true ;
if( num5 == num6)
{
    console.log("The condition is true");
}

else
{
    console.log("The condition is false");
}

// using triple equal , it checks value and value type , so it understands , one value is int type and another is boolean variable
const num7 = 1;
const num8 = true ;
if( num7 === num8)
{
    console.log("The condition is true");
}

else
{
    console.log("The condition is false");
}
