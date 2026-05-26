//Observer Modal
// var eventEmitter = require("events")

// var em = new eventEmitter()

// em.on("mohit",()=>{
//     console.log("I am being called")
// })

// em.emit("mohit")

// ----------------------------------------------------

// var eventEmitter=require("events")
// var em=new eventEmitter();

// em.on("Mohit",()=>{
//     console.log("I am being Called")
// })
// em.emit("Mohit")
// em.emit("Mohit")
// em.emit("Mohit")

//-----------------------------------------------

var eventEmitter=require("events")
var em=new eventEmitter();

em.once("Mohit",()=>{
    console.log("I am being Called")
})
em.emit("Mohit")
em.emit("Mohit")
em.emit("Mohit")

// -----------------------------------------------