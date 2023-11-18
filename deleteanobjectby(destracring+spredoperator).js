const obj={a:1,
            b:2,
            c:3}


            //destrucring+spred operator

            const {a,c,b,...restOfData}=obj
            console.log(restOfData)