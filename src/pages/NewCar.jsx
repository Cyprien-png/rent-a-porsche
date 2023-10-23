import React, {useState} from 'react';
import Input from '../components/Input'
import Select from '../components/Select';

import { useNavigate } from "react-router-dom";

const NewCar = () => {

    const navigate = useNavigate();
    const cities = ["Lausanne", "Genève", "Zurich", "Berne"]
    const locationPlaceholder = "Location"
    const [location, setLocation] = useState(locationPlaceholder)

    return (
        <div className='page'>


            <form className='px-4 flex flex-col' onSubmit={() => localStorage.setItem("user", "admin") + navigate("/")}>
                <Input placeholder="Name" label="Name" userStyle={"admin"} />
                <Input placeholder="Model" label="Model" userStyle={"admin"} />
                <Input placeholder="Power" label="Power (hp)" userStyle={"admin"} type="number" />
                <Input placeholder="Fuel type" label="Fuel type" userStyle={"admin"} />
                <Input placeholder="Price" label="Price ($)" userStyle={"admin"} type="number" />
                <Select placeholder={locationPlaceholder} value={location} action={(e) => setLocation(e.value)} label="Location" userStyle={"admin"} options={cities} />
                <Input placeholder="Add file" label="Image" userStyle={"admin"} type="file" />

                <label>Availabilities</label>
                <button className='h-9 border-[1px] rounded-lg px-3 mb-5 border-Porsche-yellow bg-[#3d340b] text-left' onClick={(e) => e.preventDefault()}>
                    <div className='flex justify-between text-Porsche-gray items-center'>
                        <span>Select availabilities</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>

                    </div>
                </button>

                <Input value="Add the car" type="submit" userStyle={"admin"} />
            </form>
        </div>
    )
}

export default NewCar