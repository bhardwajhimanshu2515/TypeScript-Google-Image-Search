const express = require('express');
import { Request, Response, Application } from 'express';
const axios=require("axios");
const cors=require("cors");

const app:Application=express();
app.use(cors());

app.get("/:targetName",(req:Request,res:Response)=>{
    var options:Object = {
        method: 'GET',
        url: 'https://google-search3.p.rapidapi.com/api/v1/images/q='+req.params.targetName,
        headers: {
          'x-rapidapi-key': 'c8cb6b8cccmshc02b57f0b5a8c98p1516cdjsnb64d72a5ad33',
          'x-rapidapi-host': 'google-search3.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response:any) {
          console.log(response.data);
          res.json(response.data)
      }).catch(function (error:any) {
          console.error(error);
      });
})

app.listen(8081,()=>{
    console.log("server started");
})