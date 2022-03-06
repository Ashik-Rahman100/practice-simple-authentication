import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle, signInUsingGitHub} = useAuth()
    return (
        <div>
            <h2>Login</h2>
            <form>
                <input type="email"  /> <br />
                <input type="password" /> <br />
                <button>Login</button> <br />
                 /-----------------***-------------------/ <br /><br />
                 
            </form>

            <button onClick={signInUsingGoogle}>GitHub Login</button>
            <button onClick={signInUsingGitHub}>GitHub Login Register</button><br />
                <Link to='/register'>Please Register Now</Link>
        </div>
    );
};

export default Login;