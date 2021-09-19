import { userModelInterface, UserDoc } from '../interfaces/user'
import { model, Schema } from 'mongoose'

const userSchema: Schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        maxlength: 23
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

const User = model<UserDoc, userModelInterface>('User', userSchema)


export { User }