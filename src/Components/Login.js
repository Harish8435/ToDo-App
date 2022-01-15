import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({setLoginUser}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" });

    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]: value});
    }

    const signIn = (e) => {
        e.preventDefault();
        const { email, password } = user;

        if( email && password){
            axios.post("http://localhost:9002/login", user)
            .then( res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                navigate("/")
            })
        }else{
            alert("Invalid inputs")
        }
    }

    return (
        <div className="main-div d-flex justify-content-center align-items-center">
            <section className='login d-flex flex-column justify-content-center m-auto p-3'>
                <h2 className='text-left my-2 ms-5'>Login</h2>
                <div className="d-flex justify-content-around align-items-center my-2">
                    <form action="" className='d-flex flex-column'>
                        <div className="user input-div">
                            <i className="bi bi-envelope"></i>
                            <input className='p-2 m-2' type="email" name='email' id='user' placeholder='Email' value={user.email} onChange={handleChange} autoComplete='off' />
                        </div>

                        <div className="pass input-div">
                            <i className="bi bi-file-lock"></i>
                            <input className='p-2 m-2' type="password" name='password' id='pass' placeholder='Password' value={user.password} onChange={handleChange} />
                        </div>

                        <div className="p-3 text-center">
                            <input className='submit py-1 px-3 m-1' type="submit" value="Sign in" onClick={signIn} />
                        </div>
                        <div className="text-center">New user <span className='switchLogin' onClick={()=>{navigate("/register")}}>Register here</span></div>
                    </form>
                    {/* <div className="svg">
                        <img src={loginImg} alt="SVG" />
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default Login
