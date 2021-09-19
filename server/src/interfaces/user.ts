import { Document, Model } from "mongoose"

export interface IUser {
    username: string
    email?: string
    password: string
}

// have all properties of mongoose.Document interface
export interface UserDoc extends Document {
    username: string
    email?: string
    password: string
}

export interface userModelInterface extends Model<UserDoc> {
    build(attr: IUser): UserDoc
}