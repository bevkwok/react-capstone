import { Response, Request } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { User  } from '../models/user.model'
import { UserDoc } from '../interfaces/user'

const logIn = async(req: Request, res: Response): Promise<void> => {
    try {
        
        const body = req.body as Pick<UserDoc, "username" | "password">
        console.log(body);

        const user: UserDoc | null = await User.findOne({ username: body.username })
        const correctPassword = (user === null) 
            ? false
            : await bcrypt.compare(body.password, user.password);

        if(!correctPassword || !user) {
            res.status(401).json({ msg: "Invalid username or password"})
        } else {
            const userForToken = {
                username: user.username,
                _id: user._id,
                isAdmin: user.isAdmin
            }
        
            const token = jwt.sign(
                userForToken, 
                process.env.JWT_KEY as string,
                { expiresIn: '24h' }
            )

            res.status(200).json({ 
                token, 
                username: user.username, 
                id: user._id })
        }
    } catch (error) {
        throw error
    }
}

export { logIn }
