var a=30//global scope variable
function add()
{
    var a=20//function scope variable
    console.log(a)
    if(true)
    {
        var z=300//block scope variable and function scope
        console.log(z)
    }
    console.log(z)//it is possible with only var block scope only
}
console.log(a);
add()