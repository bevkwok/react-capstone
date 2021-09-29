import { Response, Request } from 'express'
import { UserDoc } from '../interfaces/user'
import { User  } from '../models/user.model'
import bcrypt from 'bcrypt'

const getAllUsers = async(req: Request, res: Response): Promise<void> => {
    try {
        const users: UserDoc[] = await User.find()
        res.status(200).json({ users })
    } catch (error) {
        throw error
    }
}

const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        let user: UserDoc | null
        const id = req.params.id
        if(id.match(/^[0-9a-fA-F]{24}$/)){
            user = await User.findById(id)
        } else {
            const username = req.params.id
            user = await User.findOne({username: username})
        }
        res.status(200).json({ user })
    } catch (error) {
        throw error
    }
}

const addUser = async(req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<UserDoc, "username" | "email" | "password" | "isAdmin">

        const passwordHash = bcrypt.hashSync(body.password, 10);

        const user: UserDoc = new User({
            username: body.username,
            email: body.email,
            password: passwordHash,
            isAdmin: body.isAdmin
        })

        const newUser: UserDoc = await user.save()
        const allUsers: UserDoc[] = await User.find()

        res
            .status(201)
            .json({ message: "User added", user: newUser, users: allUsers })
    } catch (error) {
        throw error
    }
}

const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req

        const user = await User.findById(id)

        if(user !== null && user.password !== body.password){
            const passwordHash = bcrypt.hashSync(body.password, 10);
        
            const updateUser: UserDoc | null = await User.findByIdAndUpdate(
                { _id: id},
                { 
                    username: body.username,
                    email: body.email,
                    password: passwordHash,
                    isAdmin: body.isAdmin
                }
            )

            res.status(200).json({
                message: "User updated",
                user: updateUser,
            })
            
        } else if (!user) {
            res.status(404).send('User with that id does not exist')
        }
    } catch (error) {
        throw error
    }
}

const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedUser: UserDoc | null = await User.findByIdAndRemove(
            req.params.id
        )
        const allUsers: UserDoc[] = await User.find()
        res.status(200).json({
            message: "User deleted",
            user: deletedUser,
            users: allUsers,
        })
    } catch (error) {
        throw error
    }
}

export { getAllUsers, getUser, addUser, updateUser, deleteUser }