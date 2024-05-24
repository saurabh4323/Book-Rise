import express, { request } from 'express';
import {PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';


const app = express();

// Middleware for parsing request body
app.use(express.json());



// Middleware for handeling CORS policy
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:['Content-Type']
})
);

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("welcome");
  });

app.use('/books', booksRoute);

mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('App connected to database');

})
.catch((error) => {
    console.log(error);
});




app.listen(PORT, () => {
    console.log(`App is listening to port: http://localhost:${PORT}`)
});

