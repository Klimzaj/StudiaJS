const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Witaj w nodeJS'))
//if document.URL any console.log('aaa');
app.get('/[a-z]{1,}',(req,res)=> res.send('Witaj w nodeJS')) //odpowiednie wyrazenie regularne
app.get('/[0-9]{1,}',(req,res)=> res.send('Witaj w nodeJS'))
app.get('/[0-9]{1,}*[a-z]{1,}',(req,res)=> res.send('Witaj w nodeJS'))
app.get('/[a-z]{1,}*[0-9]{1,}',(req,res)=> res.send('Witaj w nodeJS'))

app.listen(3000, () => console.log('Stoi'))