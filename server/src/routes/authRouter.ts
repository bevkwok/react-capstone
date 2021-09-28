import express from 'express'
import { logIn, register } from '../controllers/authController'

const router = express.Router()

router.post("/auth/login", logIn)

router.post("/register", register)


export { router as authRouter }