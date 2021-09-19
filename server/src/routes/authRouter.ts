import express from 'express'
import { logIn } from '../controllers/authController'

const router = express.Router()

router.post("/auth/login", logIn)

export { router as authRouter }