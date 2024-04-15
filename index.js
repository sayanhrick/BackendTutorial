const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, world')
})

app.get('/youtube',(req,res)=>{
    res.send('Hrick \'s Youtube Channel')
})

app.listen(port,() => {
    console.log('Your Backend is Running at http://localhost/3000 port')
})