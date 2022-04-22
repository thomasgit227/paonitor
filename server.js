import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import {fileURLToPath} from 'url';

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var program;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import Built Files
app.use(express.static(path.resolve(__dirname, "./client/build")));

// Use Built Files
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

// Endpoints
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

// Listener
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
