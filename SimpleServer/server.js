// const { add,x } = require("./utilities/util")

// console.log("Hello welcome")
// const test =add(10,20)
// console.log(test)

const http=require('http')   //http module

const handler=(req,res)=>{
    //API
    if(req.url=='/getUsers'){
        res.write("Welcome Get User")
    }
    if(req.url=='/deleteUser'){
        res.write("Delete Get User")
    }
     res.end("end"); //mandatory -- agr ye nhi lgyaya to req stop nhi hogi
}
http.createServer(handler).listen(5001,()=>{
    console.log("listnig to the port")
});