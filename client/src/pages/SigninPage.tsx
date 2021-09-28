import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { signin } from '../redux/actions/userActions';
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

const SigninPage = (props: any) => {

    const [username, setUsername]:[any, SetUsername] = useState('');
    const [password, setPassword]:[any, SetPassword] = useState('');

    const redirect = props.location.search? props.location.search.split('=')[1]: '/'
 
    const userSignin = useSelector((state: any) => state.userSignin )
    const { userInfo, loading, error } = userSignin

    const dispatch = useDispatch()
    const submitHandler = (e: any) => {
        e.preventDefault()
        dispatch(signin(username, password))
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
                    <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="error" message={error}/>}
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