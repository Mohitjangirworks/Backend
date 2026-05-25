var fs=require("fs")  //fs module

//fs are blocking in nature

fs.writeFile('mohit.txt','Attendace Please',(error)=>{
    if(error) throw error;
    console.log('file write success')
})

fs.appendFile('mohit.txt','Attendace Please',(error)=>{
    if(error) throw error;
    console.log('file write success')
})

fs.readFile("mohit.txt","utf8",(error,data)=>{
    if(error) throw error;
    console.log(data)
})

fs.unlink("mohit.txt",(error)=>{
    if(error) console.error(error)
    console.log("file delted")
})

fs.mkdir("PW SOT24",(error)=>{
    if(error) console.error(error)
    console.log("Folder Created")
})

