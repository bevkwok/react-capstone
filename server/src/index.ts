import cors from 'cors';
import express from 'express'
import mongoose from 'mongoose'
import { json } from 'body-parser'
import { userRouter } from './routes/userRouter'
import { authRouter } from './routes/authRouter'
import { productRouter } from './routes/productRouter'
require("dotenv").config();

const app = express()

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options));
app.use(json())
app.use(userRouter)
app.use(authRouter)
app.use(productRouter)

const PORT = 3001

mongoose.connect('mongodb://localhost:27017/capstone', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => {
    console.log('connected to database for capstone');
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})