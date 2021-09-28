import { useState } from 'react'
import { Link } from 'react-router-dom'

const SigninPage = () => {

    const [username, setUsername]:[any, SetUsername] = useState('');
    const [password, setPassword]:[any, SetPassword] = useState('');

    const submitHandler = (e: any) => {
        e.preventDefault()
        // signin action
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter username" required onChange={(e: any) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" required onChange={(e: any) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sign In</button>
                </div>
                <div>
                    <label />
                    <div>
                        New Customer? <Link to="/register">Creat New Account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SigninPage