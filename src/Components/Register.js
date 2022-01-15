import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({ name: "", email: "", password: "", cPassword: "" });

    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const signUp = (e) => {
        e.preventDefault();
        const { name, email, password, cPassword } = user;

        if (name && email && password && (password === cPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message)
                    navigate("/login")
                })
        } else {
            alert("Invalid Input")
        }
    }

    return (
        <div className="main-div d-flex justify-content-center align-items-center">
            <section className='signUp d-flex flex-column justify-content-center m-auto p-3'>
                <h2 className='text-left my-2 ms-5'>Sign up</h2>
                <div className="d-flex justify-content-around align-items-center my-2">
                    <form action="" className='d-flex flex-column'>
                        <div className="input-div">
                            <i className="bi bi-person"></i>
                            <input className='p-2 m-2' type="text" name='name' id='user' placeholder='Name' value={user.name} onChange={handleChange} autoComplete='off' />
                        </div>

                        <div className="input-div">
                            <i className="bi bi-envelope"></i>
                            <input className='p-2 m-2' type="email" name='email' id='email' placeholder='Email' value={user.email} onChange={handleChange} autoComplete='off' />
                        </div>

                        <div className="input-div">
                            <i className="bi bi-file-lock"></i>
                            <input className='p-2 m-2' type="password" name='password' id='pass' placeholder='Password' value={user.password} onChange={handleChange} />
                        </div>

                        <div className="input-div">
                            <i className="bi bi-file-lock-fill"></i>
                            <input className='p-2 m-2' type="password" name='cPassword' id='cPassword' placeholder='Confirm Password' value={user.cPassword} onChange={handleChange} autoComplete='off' />
                        </div>

                        <div className="p-3 text-center">
                            <input className='submit py-1 px-3 m-1' type="submit" value="Register" onClick={signUp} />
                        </div>
                        <div className="text-center">Already have an acount <sapn className='switchLogin' onClick={()=>{navigate("/login")}}>Login here</sapn></div>
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
