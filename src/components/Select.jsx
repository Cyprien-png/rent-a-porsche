import React, { useState } from 'react';

const Select = ({ options, placeholder, label, userStyle, action, value }) => {
    // const [selectedValue, setSelectedValue] = useState(placeholder);

    return (
        <>
            <label>{label}</label>
            <select
                className={'h-9 border-[1px] rounded-lg pl-3 pr-8 mb-5 cursor-pointer bg-background-gray ' +
                    (userStyle === 'admin' ? 'border-Porsche-yellow ' : '  border-Porsche-red ') +
                    (value === placeholder ? 'text-Porsche-gray' : '')}
                onChange={action}
                value={value}
            >
                <option disabled value={placeholder}>
                    {placeholder}
                </option>
                {options.map((option, index) => (
                    <option key={index} className='text-white' value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Select;
