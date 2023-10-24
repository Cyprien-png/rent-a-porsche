import React, { useEffect, useState } from 'react'

import './lib/tailwind/output.css'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import NewCar from './pages/NewCar'
import Account from './pages/Account'
import Search from './pages/Search'
import Err404 from './pages/404'

import { Route, Routes } from "react-router-dom"

function App() {

    const [user, setUser] = useState("")

    return (
        <div className='text-white bg-background-gray font-Next flex flex-col'>

            <Navbar user={user}/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account" element={<Account />} />
                <Route path="/newCar" element={<NewCar />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<Err404 />} />
            </Routes>
            {user}
        </div>
    )
}

export default App