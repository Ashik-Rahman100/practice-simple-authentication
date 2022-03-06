import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            <div>
                <h2>This is Home</h2>
                <h5>User: {user.displayName}</h5>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Home;