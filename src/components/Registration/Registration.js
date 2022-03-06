import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {

    const {signInUsingGoogle,signInUsingGitHub} = useAuth()
    return (
        <div>
            <h2>Registration</h2>
            <form>
                <input type="text" placeholder='Enter your name' /><br />
                <input type="email" placeholder = 'Enter your email' /> <br />
                <input type="password" placeholder='Enter your password' /> <br />
                <button>Registration</button> <br />
                
                <Link to = '/login'>Already Registered</Link>
            </form><br />

            <button onClick={signInUsingGoogle}>Registration With Google</button>
            <button onClick={signInUsingGitHub}>Registration GitHub</button> <br />
        </div>
    );
};

export default Registration;