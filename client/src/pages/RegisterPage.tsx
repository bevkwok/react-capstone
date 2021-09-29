import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { register } from '../redux/actions/userActions';
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

const RegisterPage = (props: any) => {

    const [username, setUsername]:[any, SetUsername] = useState('');
    const [email, setEmail]:[any, SetUsername] = useState('');
    const [password, setPassword]:[any, SetPassword] = useState('');
    const [confrimPassword, setConfirmPassword]:[any, any] = useState('');


    const redirect = props.location.search? props.location.search.split('=')[1]: '/'

    const userRegister = useSelector((state: any) => state.userRegister )
    const { userInfo, loading, error } = userRegister

    const dispatch = useDispatch()
    const submitHandler = (e: any) => {
        e.preventDefault()
        if(password !== confrimPassword) {
            alert("Please double check password and confirm password")
        } else {
            dispatch(register(username, email, password))
        }
    }

    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect)
        }
    }, [props.history, redirect, userInfo])
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Create New Account</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="error" message={error}/>}
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter username" required onChange={(e: any) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter email" required onChange={(e: any) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" required onChange={(e: any) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" placeholder="Confirm password" required onChange={(e: any) => setConfirmPassword(e.target.value)} />
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Register</button>
                </div>
                <div>
                    <label />
                    <div>
                        Already have an account? <Link to={`/signin?redirect=${redirect}`}>Sign in</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage