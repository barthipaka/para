 const obj={a:1,
            b:2,
           c:3,
           }


           //const newobj=obj;//mutable//copyof address
        //   obj.b=5
        // delete newobj.a
        //   console.log(obj)
        //    console.log(newobj)
        //       console.log(obj.b)



//by immutable avoid unnessary network call old vresion
const newobj=Object.assign({},obj,{d:4});//immutable//new addres are crearted
console.log(obj)//orginal object aslike that
console.log(newobj)//duplicate one


//same and are new approach

const newbj={...obj,d:4}
console.log(obj)
console.log(newbj)



