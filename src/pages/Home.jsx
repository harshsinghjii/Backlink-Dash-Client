import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <Link to={"/login"}><button>Login</button></Link>
            <Link to={"/signup"}><button >Signup</button></Link>
        </>
    )
}

export default Home