import express from 'express'
import { testing, getAllUsers, getUser, addUser, updateUser, deleteUser } from '../controllers/userController'

const router = express.Router()

router.get("/testing", testing)

router.get("/users", getAllUsers)

router.get("/user/:id", getUser)

router.post("/add-user", addUser)

router.put("/edit-user/:id", updateUser)

router.delete("/delete-user/:id", deleteUser)

export { router as userRouter }