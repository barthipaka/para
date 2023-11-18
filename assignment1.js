const users=[{
    name:"yagnesh",
    age:33,
    gender:"male"
},{
    name:"rakesh",
    age:23,
    gender:"male"
},{
    name:"santhosh",
    age:28,//change the value immutabully to age 31
    gender:"male"
},{
    name:"sravya",
    age:22,
    gender:"female"
},{
    name:"mounika",
    age:23,
    gender:"female"
},]
const index=2;

const updateUsers=[...users.slice(0,index),{...users.slice[index],age:31},
    ...users.slice(index+1)]
    console.log(updateUsers)//age:31