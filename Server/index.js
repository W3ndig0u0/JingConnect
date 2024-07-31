import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js'

const app = express();


app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(bodyParser.json({limit: "30mb", extends: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extends: true}));

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://Jing:Jx1184479102@jingconnect.z0tv7ay.mongodb.net/'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log('Server is running: ' + PORT)))
  .catch((error) => console.log(error.message));