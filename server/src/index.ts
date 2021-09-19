import express from 'express'
import mongoose from 'mongoose'
import { json } from 'body-parser'
import { userRouter } from './routes/userRouter'
import { authRouter } from './routes/authRouter'
require("dotenv").config();

const app = express()
app.use(json())
app.use(userRouter)
app.use(authRouter)

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