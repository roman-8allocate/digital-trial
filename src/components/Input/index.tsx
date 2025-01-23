'use client'

import * as React from 'react';

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ placeholder, required, ...props }, ref) => {
        const [value, setValue] = React.useState('')

        return (
            <label className="relative group">
                <input ref={ref} className="w-full outline-0 h-[45px] px-[21px] bg-gray-9 text-gray-1 text-sm tracking-[0.04em] leading-4" onChange={(e) => setValue(e.target.value)} required={required} {...props} />
                {!value ? <span className="absolute left-0 top-1/2 -translate-y-2/4 px-[21px] text-gray-10 text-sm tracking-[0.04em] leading-4">{placeholder}{required ?
                    <span className="text-red-1">*</span> : null}</span> : null}
            </label>
        )
    }
)

Input.displayName = 'Input'

export default Input
