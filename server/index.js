import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
const PORT = process.env.PORT || 5000

var program;

const app = express()

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.use(bodyParser.json({limit: "32mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}))
// app.use(cors())

app.get('/pi/', (req, res) => {
    res.status(200);
    res.send(program);
})

app.post('/new-prog/', (req, res) => {
    let prog = req.body.new;
    
    program = prog;
    res.status(201);
    res.send(program);
})