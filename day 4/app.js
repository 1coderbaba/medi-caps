const express = require("express");
const app = express();

app.use(express.static("./public"))

app.listen(5000);


// http://localhost:5000/
// app.get("/",function(req,res)
// {
//      res.send("hello from express")
// })

// // http://localhost:5000/homepage
// app.get("/homepage",function(req,res)
// {
//     res.send("homepage")
// })
