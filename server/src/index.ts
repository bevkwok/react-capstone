import express from 'express'
import mongoose from 'mongoose'
import { json } from 'body-parser'
import { userRouter } from './routes/userRouter'

const app = express()
app.use(json())
app.use(userRouter)

const PORT = 3001

mongoose.connect('mongodb://localhost:27017/user', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to database for capstone');
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})