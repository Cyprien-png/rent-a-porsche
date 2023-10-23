import React, { useState } from 'react'

import Input from '../components/Input'
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";


const Account = () => {

    const navigate = useNavigate()
    const userDefaultLogo = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='white' className='mx-auto h-36'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z' /%3E%3C/svg%3E")`
    const [userImage, setUserImage] = useState(userDefaultLogo)
    const [mail, setMail] = useState("mail@exemple.com")


    const updateImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const imageUrl = reader.result;
            setUserImage(`url(${imageUrl})`);
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    return (
        <div className='page'>
            <form className='px-4 flex flex-col' onSubmit={() => localStorage.setItem("user", "admin") + navigate("/")}>

                <input
                    onChange={updateImage}
                    className='h-36 w-36 mx-auto bg-cover bg-no-repeat bg-center rounded-full'
                    type="file"
                    accept="image/*"
                    style={{ backgroundImage: userImage }}
                />

                <Input placeholder="Firstname" label="Firstname" />
                <Input placeholder="Lastname" label="Lastname" />
                <Input placeholder="Birthdate" label="Birthdate" type="date" />
                <Input placeholder="Phone" label="Phone" />
                <Input placeholder="Mail" label="Mail" type="email" action={(e) => setMail(e.target.value)} value={mail} />

                <Input value="Save changes" type="submit" />
            </form>

            <div className='w-full flex justify-between px-4 my-8'>
                <Button type="admin" text="Reset password" />
                <Button type="admin" text="Logout" action={() => localStorage.removeItem("user") + navigate("/")} />
            </div>
        </div>
    )
}

export default Account