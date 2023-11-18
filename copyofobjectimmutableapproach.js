const obj={a:1,b:2,c:3}
const newobj=Object.assign({},obj,{d:4})
console.log(obj)
console.log(newobj)

delete newobj.b;
console.log(newobj)//we are avoiding the unnessary making call