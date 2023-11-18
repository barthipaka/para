//slice adding data at particular index

const arry=[1,2,3,4,5,6]

//i want to add a number at inbetween 2 and 3
const index=2
const arry1=arry.slice(0,index)
const arry2=arry.slice(index)
const final=[...arry1,7,...arry2]
console.log(final)


//skip 3
const arry=[1,2,3,4,5,6,7]
const index=2
const arry1=arry.slice(0,index)

const arry2=arry.slice(index+1)
console.log(arry2)