import React from 'react'
import AppLogo from '../components/AppLogo'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    return (
        <div className='page'>
            <AppLogo />

            <form className='px-4 mt-20 flex flex-col' action="">
                <Input placeholder="Mail" label="Email" type="email"/>
                <Input placeholder="Password" label="Password" type="password" />
                <Input placeholder="Confirmation" label="Password confirmation" type="password" />

                <span className='text-Porsche-gray text-xs'>I already have an account. <a onClick={()=>navigate('/login')} className='text-Porsche-red cursor-pointer'>Login</a></span>

                <Input value="Register" type="submit" />
            </form>
        </div>
    )
}

export default Register