import React from 'react'

import Input from './Input'

const VehiculeForm = ({ vehicule, vehiculeAction, fuelType, fuelTypeAction}) => {
    return (
        <>
            {/* ; filterCars('vehicule', e.target.value) */}
            <Input value={vehicule} action={vehiculeAction} placeholder="Vehicule" label="Vehicule" />

            <Input value={fuelType} action={fuelTypeAction} placeholder="Fuel type" label="Fuel type" />

            <div className='flex w-full'>
                <div className='w-full pr-8'>
                    <Input placeholder="Starting date" label="Pick up date" type="date" />
                </div>
                <div className='w-full pl-8'>
                    <Input placeholder="Ending date" label="Drop off date" type="date" />
                </div>
            </div>
        </>
    )
}

export default VehiculeForm