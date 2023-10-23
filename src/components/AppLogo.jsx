import React from 'react'

const AppLogo = () => {
    return (
        <div className='font-Porscha flex flex-col items-center'>
            <h1 className='text-3xl'>Rent a </h1>
            <h1 className='text-Porsche-red text-glow'>Porsche</h1>
            {localStorage.getItem("user") == 'admin' ? <h1 className='text-3xl text-Porsche-yellow'>Admin</h1> : null}
        </div>
    )
}

export default AppLogo