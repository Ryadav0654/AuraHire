import React, { ChangeEventHandler } from 'react'

interface Input {
    className?: string;
    placeholder?: string;
    onchange: (e: ChangeEventHandler<HTMLInputElement>) => void;
    props?: object;
}

const Input = ({ placeholder, className, onchange, props }: Input) => {
    return (
        <>
            <input type="text" className={`${className} py-2 px-3 rounded-xl`} placeholder={placeholder} onChange={() => onchange} {...props} />
        </>
    )
}

export default Input