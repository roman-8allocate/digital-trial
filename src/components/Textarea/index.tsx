'use client'

import * as React from 'react';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
    ({ placeholder, required, ...props }, ref) => {
        const [value, setValue] = React.useState('')

        return (
            <label className="relative group h-[147px]">
                <textarea ref={ref} className="w-full h-[147px] outline-0 px-[21px] py-[14px] bg-gray-9 text-gray-1 text-sm tracking-[0.04em] leading-4 resize-none" onChange={(e) => setValue(e.target.value)} required={required} {...props} />
                {!value ? <span className="absolute left-0 top-[14px] px-[21px] text-gray-10 text-sm tracking-[0.04em] leading-4">{placeholder}{required ?
                    <span className="text-red-1">*</span> : null}</span> : null}
            </label>
        )
    }
)

Textarea.displayName = 'Textarea'

export default Textarea
