import React, {useState} from 'react'
import AppLogo from '../components/AppLogo'
import Input from '../components/Input'

import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='page'>
            <AppLogo />

            <form className='px-4 mt-20 flex flex-col' onSubmit={() => localStorage.setItem("user", "admin") + navigate("/") }>
                <Input value={mail} action={(e) => setMail(e.target.value)} placeholder="Mail" label="Email" type="email"/>
                <Input value={password} action={(e) => setPassword(e.target.value)} placeholder="Password" label="Password" type="password" />

                <span className='text-Porsche-gray text-xs'>I don't have an account yet. <a onClick={()=>navigate('/register')} className='text-Porsche-red cursor-pointer'>Register</a></span>

                <Input value="Login" type="submit" />
            </form>
        </div>
    )
}

export default Login