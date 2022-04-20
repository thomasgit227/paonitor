import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';

var program;

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
// app.use(cors())

app.get('/pi/', (req, res) => {
    res.status(200);
    res.send(program);
})

app.post('/new-prog/', (req, res) => {
    let prog = req.body
    
    program = prog;
    res.status(201);
    res.send(program);
})