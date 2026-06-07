var fs=require("fs")  //fs module

var path=require("path")
filePath=path.join(__dirname,"PW SOT24","file1.txt")

let fileReadStream=fs.createReadStream(filePath)
let fileWriteStream=fs.createWriteStream(path.join(__dirname,"PW SOT24","file2.txt"))

fileReadStream.pipe(fileWriteStream);

fileReadStream.on("data", (chunk) => {
    fileWriteStream.write(chunk);
});

// Error handling
fileReadStream.on("error", (err) => {
    console.log("Read Error:", err.message);
});

fileWriteStream.on("error", (err) => {
    console.log("Write Error:", err.message);
});

// Success message
fileWriteStream.on("finish", () => {
    console.log("File copied successfully!");
});



fileReadStream.on("data", (chunk) => {
    console.log("Chunk Received:");
    console.log(chunk.toString());
});

fileReadStream.on("end", () => {
    console.log("File Reading Completed");
});


fileReadStream.on("data", (chunk) => {
    console.log(chunk);
});


fileReadStream.on("data", (chunk) => {
    console.log("Size:", chunk.length, "bytes");
    console.log(chunk.toString());
});
