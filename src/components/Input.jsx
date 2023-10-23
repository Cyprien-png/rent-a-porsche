import React, { useState, useEffect } from 'react'

const  Input = ({ placeholder, label, type, value, action, userStyle }) => {

    let input = ""

    if (type == "submit") {

        // Changing style of submit buttons
        input = <input className={'rounded-lg h-8 w-40 mt-12 mx-auto cursor-pointer ' + (userStyle === 'admin' ? 'bg-Porsche-yellow glow-admin text-black' : 'bg-Porsche-red glow')} value={value} placeholder={placeholder} type={type} />
    } else {

        input = <>
            <label>{label}</label>
            <input className={'h-9 w-full border-[1px] rounded-lg px-3 mb-4 bg-background-gray '+ (userStyle === 'admin' ? 'border-Porsche-yellow ' : '  border-Porsche-red ') + (type === "file"? 'pt-1 cursor-pointer' : '')} accept={(type === "file"? 'image/*' : '')} value={value} onChange={action} placeholder={placeholder} type={type} />
        </>
    }


    return input
}

export default Input