import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className='nav-link'>
            <Link to='/'>Home</Link>
            <Link to='/shipping'>Shipping</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            {user.email &&<Link to = '#'>{user.displayName}</Link>}
            {user?.email && <button onClick = {logOut}>Log Out</button>}

        </div> 
    );
};

export default Header;