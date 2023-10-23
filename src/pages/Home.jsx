import React from 'react'
import Button from '../components/Button'
import logo from '../images/Porsche-logo.png'
import AppLogo from '../components/AppLogo'

import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    return (
        <div className='page pb-20 justify-between items-center'>
            <AppLogo />

            <img className='h-36' src={logo} alt="Porsche" />

            <div className='grid grid-cols-1 gap-6'>

                {localStorage.getItem("user") === "admin" ?
                    <Button type={"admin"} text="Add a new car" action={() => navigate("/newCar")} />
                    : null
                }

                <Button action={()=>navigate("/search")} text="Search a car" />
            </div>
        </div>
    )
}

export default Home