const express = require('express')
const app = express()

const pug = require('pug')

app.set('view engine', 'pug')

app.get('/', function(req,res){
    res.render(
        'sample',
        { title : 'Express Pug', 
            message: 'Arturito Express Pug template',
            paragraph: 'This is my little website created with Express and Pug'})
})

app.listen(3002, () =>{
   console.log('Server is running on 3002')
})