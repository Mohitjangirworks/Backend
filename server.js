//absolute path   => C://users/myFolder/newTest.txt
//  Relative path  => myfolder/newTest.txt

var path=require("path")

console.log(__dirname)
console.log(__filename) //file name bhi aayega 

console.log(path.isAbsolute("myfolder/mohit.txt")) //ARelative
console.log(path.isAbsolute("/myfolder/mohit.txt")) //Absolute

console.log(path.resolve("Logs","test.log.txt"))  //to make folers inside the current dir using text segment

console.log(path.join("Logs","test.log.txt")) // en segments ko join krke path bna dega

console.log(path.join(__dirname,"Logs","test.log.txt")) //behave like resolve

let path_log=path.parse(__filename);  //obj bna dega 
console.log(path_log);