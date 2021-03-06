import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import {fileURLToPath} from 'url';

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Seeded Data
var data =
	{
		action: "nothing",
	}

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import Built Files
app.use(express.static(path.resolve(__dirname, "./client/build")));

// Endpoints
app.get('/action/', (req, res) => {
  res.status(200);
  res.send(data.action);
})

app.post('/action/', (req, res) => {
  let tempAction = req.body.action
  data.action = tempAction
  res.status(201);
  res.send(data.action);
})

// Use Built Files
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

// Listener
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
