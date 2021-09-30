import express from 'express'
import { charge } from '../controllers/stripeController'

const router = express.Router()

router.post("/stripe/charge", charge)

export { router as stripeRouter }