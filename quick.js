const express=require('express');const app=express();app.get('/',(req,res)=>res.send('<h1>成功</h1>'));app.listen(3003,()=>console.log('http://localhost:3003'));
