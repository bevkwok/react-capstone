import cors from 'cors';
import express from 'express'
import mongoose from 'mongoose'
import { json } from 'body-parser'
import { userRouter } from './routes/userRouter'
import { authRouter } from './routes/authRouter'
import { productRouter } from './routes/productRouter'
import { stripeRouter } from './routes/stripeRouter';
require("dotenv").config();

const app = express()
const PORT = 3001

const allowedOrigins = ['http://localhost:3000'];

const corsOptions: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(corsOptions));
app.use(json())
app.use(userRouter)
app.use(authRouter)
app.use(productRouter)
app.use(stripeRouter)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.sgjh9.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

const options = { useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.set("useFindAndModify", false)

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        })
    )
    .catch(error => {
        throw error
    })