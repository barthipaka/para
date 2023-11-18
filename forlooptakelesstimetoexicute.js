
//for loop exicution time

const arr=[...Array(1000000000000000).keys()]
 console.time("for")
for(let i=0;i<=arr.length;i++)
{
    
}
console.timeEnd("for")

console.time("for each")
arr.forEach(element=>{

});
console.timeEnd("for each")

