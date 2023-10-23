import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Input from '../components/Input';
import Select from '../components/Select';
import { CarCard } from '../components/CarCard';
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

import VehiculeForm from '../components/VehiculeForm';


import cars from '../data/cars.json'

const Search = () => {

    const navigate = useNavigate()
    const cities = ["Lausanne", "Genève", "Zurich", "Berne"]
    const [filteredCars, setFilteredCars] = useState(cars)
    const locationPlaceholder = "Location"

    const [location, setLocation] = useState(locationPlaceholder)
    const [vehicule, setVehicule] = useState("")
    const [fuelType, setFuelType] = useState("")

    const [locationFilter, setLocationFilter] = useState("")
    const [vehiculeFilter, setVehiculeFilter] = useState("")
    const [fuelTypeFilter, setFuelTypeFilter] = useState("")



    const filterCars = ({ prop, value }) => {

        let tmpCars = cars

        // filter locations
        if (prop === 'location' || locationFilter) {
            tmpCars = cars.filter((car) => car.location === (prop === 'location' ? value : locationFilter));
        }

        // filter vehicule (checking name & model)
        let tmpFilteredName = tmpCars.filter((car) => car.name.match(new RegExp(`.*${(prop === 'vehicule' ? value : vehiculeFilter)}.*`, 'i')));
        let tmpFilteredModel = tmpCars.filter((car) => car.model.match(new RegExp(`.*${(prop === 'vehicule' ? value : vehiculeFilter)}.*`, 'i')));
        // merging results of name & models
        tmpCars = [...tmpFilteredName, ...tmpFilteredModel].filter((item, index) => [...tmpFilteredName, ...tmpFilteredModel].indexOf(item) === index);

        // filter fuel type
        tmpCars = tmpCars.filter((car) => car.fuel_type.match(new RegExp(`.*${(prop === 'fuel_type' ? value : fuelTypeFilter)}.*`, 'i')));

        setFilteredCars(tmpCars)
    }

    const resetFilters = () => {
        setLocationFilter("")
        setVehiculeFilter("")
        setFuelTypeFilter("")

        setFilteredCars(cars)
    }


    const LocationForm = () => {
        return (
            <>
                <Select
                    value={location}
                    action={(e) => {
                        setLocation(e.target.value);
                        setLocationFilter(e.target.value);
                        filterCars({ prop: "location", value: e.target.value })
                    }}
                    placeholder={locationPlaceholder}
                    label="Location"
                    options={cities} />
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

    let tabs = [
        {
            id: "location",
            label: <div>
                <div onClick={() => resetFilters()} className='absolute rounded-lg w-[4.6rem] h-8 -ml-[11px] -mt-[6px] p-2'></div>
                <span >Location</span>
            </div>,
            content: <LocationForm />
        },
        {
            id: "vehicule",
            label: <div>
            <div onClick={() => resetFilters()} className='absolute rounded-lg w-[4.6rem] h-8 -ml-[11px] -mt-[6px] p-2'></div>
            <span >Vehicule</span>
        </div>,
            content: <VehiculeForm
                vehicule={vehicule}
                vehiculeAction={(e) => {
                    setVehicule(e.target.value);
                    setVehiculeFilter(e.target.value);
                    filterCars({ prop: "vehicule", value: e.target.value })
                }
                }
                fuelType={fuelType}
                fuelTypeAction={(e) => {
                    setFuelType(e.target.value);
                    setFuelTypeFilter(e.target.value);
                    filterCars({ prop: "fuelType", value: e.target.value })
                }
                }
            />
        }
    ];


    return (
        <div className='page h-[100dvh] items-center'>

            {/* Forms */}
            <Tabs color="default" aria-label="Dynamic tabs" items={tabs}>
                {(item) => (
                    <Tab className='w-full' key={item.id} title={item.label}>
                        <Card>
                            <CardBody className='bg-background-gray text-white border-none outline-none p-3'>
                                <form className=' flex flex-col' onSubmit={() => localStorage.setItem("user", "admin") + navigate("/")}>
                                    {/* <Input value={vehicule} action={(e) => setVehicule(e.target.value)} placeholder="Vehicule" label="Vehicule" /> */}

                                    {item.content}
                                </form>

                            </CardBody>
                        </Card>
                    </Tab>
                )}
            </Tabs>

            {/* Results */}
            <div className='border-t-1 border-Porsche-red w-full separator flex-grow overflow-y-auto'>

                {filteredCars.map((car, index) =>
                    <CarCard
                        key={index}
                        name={car.name}
                        model={car.model}
                        power={car.power}
                        fuelType={car.fuel_type}
                        price={car.price}
                        location={car.location}
                        image={car.image}
                    />
                )}

            </div>
        </div>
    )
}

export default Search