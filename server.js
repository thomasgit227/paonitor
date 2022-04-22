import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import {fileURLToPath} from 'url';

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var currentAction = 'nothing';

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import Built Files
app.use(express.static(path.resolve(__dirname, "./client/build")));

// Endpoints
app.get('/action/', (req, res) => {
  res.send(currentAction);
  res.status(200);
})

app.post('/action/', (req, res) => {
  let tempAction = req.body
  currentAction = tempAction
  console.log()
  res.send(currentAction);
  res.status(201);
})

// Use Built Files
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

// Listener
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
