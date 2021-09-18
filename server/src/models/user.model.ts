import { userModelInterface, UserDoc } from '../interfaces/user'
import { model, Schema } from 'mongoose'

const userSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = model<UserDoc, userModelInterface>('User', userSchema)


export { User }