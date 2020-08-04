const express = require("express");
const app = express();
const axios = require("axios");
app.set('view engine', "ejs");

app.get("/",(req, res)=>{
    res.render("search");
});

app.get("/results",async(req, res)=>{
    const term = req.query.search;
    const url = `http://www.omdbapi.com/?s=${term}&apikey=thewdb`;
     try{
         const response = await axios.get(url);
         res.render("results", {data: response.data});
     }
     catch(err){
         console.log(err);
     }
});

app.listen(3000, process.env.IP,()=>{
    console.log("start");
});