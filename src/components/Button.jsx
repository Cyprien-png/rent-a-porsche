import React from 'react'

const Button = ({ text, type, action }) => {
    return (
        <button onClick={action} className={'rounded-lg h-8 w-40 ' + (type === 'admin' ? 'bg-Porsche-yellow glow-admin text-black' : 'bg-Porsche-red glow')}>
            {text}
        </button>
    )
}

export default Button