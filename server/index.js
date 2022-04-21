import express from 'express';
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';

const PORT = process.env.PORT || 5000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var program;

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(cors())

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

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
