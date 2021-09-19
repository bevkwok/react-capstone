import express from 'express'
import { getAllUsers, getUser, addUser, updateUser, deleteUser } from '../controllers/userController'

const router = express.Router()

router.get("/users", getAllUsers)

router.get("/user/:id", getUser)

router.post("/user", addUser)

router.put("/user/:id", updateUser)

router.delete("/user/:id", deleteUser)

export { router as userRouter }