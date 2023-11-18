
// function add(a,b)
// {
//     console.log(this)
//     return a+b
// }
// console.log(add(10,40))
const add=(a,b)=>//it should use less memory arrow function not hold any data
{
    console.log(this)
    return a+b;
}
console.log(add(19,9))