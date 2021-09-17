import express, { Response, Request  } from 'express'
import { getAllUsers, getUser, addUser, updateUser, deleteUser } from '../controllers/userController'

const router = express.Router()

// router.get('/api/user', [], (req: Request, res: Response) => {
//     return res.send('user')
// })

// router.post('/api/user', (req: Request, res: Response) => {
//     return res.send('new user created')
// })


router.get("/users", getAllUsers)

router.get("/user/:id", getUser)

router.post("/add-user", addUser)

router.put("/edit-user/:id", updateUser)

router.delete("/delete-user/:id", deleteUser)

export { router as userRouter }