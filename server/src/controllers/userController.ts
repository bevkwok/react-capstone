import { Response, Request } from 'express'
import { UserDoc } from '../interfaces/user'
import { User  } from '../models/user.model'

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
        const id = req.params.id
        if(id.match(/^[0-9a-fA-F]{24}$/)){
            const user: UserDoc | null = await User.findById(id)
            res.status(200).json({ user })
        }
    } catch (error) {
        throw error
    }
}

const addUser = async(req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<UserDoc, "email" | "password">

        const user: UserDoc = new User({
            email: body.email,
            password: body.password
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
        const updateUser: UserDoc | null = await User.findByIdAndUpdate(
            { _id: id},
            body
        )
        const allUsers: UserDoc[] = await User.find()
        res.status(200).json({
            message: "User updated",
            user: updateUser,
            users: allUsers,
        })
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