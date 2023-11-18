//read notations .notation array notation destracturing

//destructuring 
// const obj={a:1,
//     b:2,
//      c:3,
//       d:4}
 
//       const {a,b,c}=obj
//       console.log(a)
//       console.log(b)
//       console.log(c)


//aliyas
   const obj={a:1,
    b:2,
     c:3,
      d:4}
    const a=5;

    const {a:objA,b,c}=obj
    console.log(a)
    console.log(objA)
    console.log(b)
    console.log(c)


    const obj={a:1,
        b:2,
         c:3,
          d:4}
          const key="b";
          const a=5;
const{a:objA,c,[key]:dynamicValue}=obj;
        console.log(a);
        console.log(dynamicValue)
    