// const http = require('http');
// const calculate = require ("./calculator")
// const server = http.createServer((req,res)=> {
//     let responseText = "<h1>Hello world</h1>\n";
//     responseText += "Addition: " + calculate.add(10, 10) + "\n";
//     responseText += "Subtraction: " + calculate.sub(10, 10) + "\n";
//     responseText += "Multiplication: " + calculate.mul(10, 10) + "\n";
//     responseText += "Division: " + calculate.div(10, 10) + "\n";

//     res.end(responseText);
// });
// server.listen(3000,() => {
// console.log("server running at http://127.0.0.1:3000/");
// });
const fs=require("fs");
const newPerson={
    "name":"John",
    "age":25
}
console.log(newPerson);
fs.writeFile("sample.json",JSON.stringify(newPerson),(err,data) => {
        if(err) {
            console.log(err);
            return
    }
})
fs.readFile('sample.json',"utf8",(err, data) => {
    if(err) {
        console.error(err)
        return
    }
    const json=JSON.parse(data)
    console.log(json)
})
    fs.writeFile("test.txt","Hello",err => {
        if(err) {
            console.log(err);
    }
});

