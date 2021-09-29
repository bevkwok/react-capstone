import { Response, Request } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { User  } from '../models/user.model'
import { UserDoc } from '../interfaces/user'

const logIn = async(req: Request, res: Response): Promise<void> => {
    try {
        
        const body = req.body as Pick<UserDoc, "username" | "password">

        const user: UserDoc | null = await User.findOne({ username: body.username })

        const correctPassword = (user === null) 
            ? false
            : await bcrypt.compare(body.password, user.password);

        if(!correctPassword || !user) {
            res.status(401).json({ msg: "Invalid username or password"})
        } else {
            console.log("user", user);
            
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

const register = async(req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<UserDoc, "username" | "email" | "password" | "isAdmin">

        const passwordHash = bcrypt.hashSync(body.password, 10);

        const user: UserDoc = new User({
            username: body.username,
            email: body.email,
            password: passwordHash,
            isAdmin: body.isAdmin
        })

        if(await User.findOne({username: body.username})) {
            res.status(400).json({ msg: "Username has been taken"})
        } else if (await User.findOne({email: body.email})){
            res.status(400).json({ msg: "Email has been taken"})
        }

        const newUser: UserDoc = await user.save()
        const userForToken = {
            username: newUser.username,
            _id: newUser._id,
            isAdmin: newUser.isAdmin
        }

        const token = jwt.sign(
            userForToken, 
            process.env.JWT_KEY as string,
            { expiresIn: '24h' }
        )

        res.status(200).json({ 
            token, 
            _id: newUser._id,
            username: newUser.username, 
            email: newUser.email,
            isAdmin: newUser.isAdmin
        })

    } catch (error) {
        console.log(error);
        
    }
}

export { logIn, register }
