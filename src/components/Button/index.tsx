import * as React from 'react'

type Variant = 'light' | 'dark' | 'slider-arrow'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
    variant: Variant
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps> (
    ({ children, variant, className, ...props }, ref) => {
        const getVariantStyles = () => {
            switch (variant) {
                case 'slider-arrow':
                    return 'bg-white text-gray-1 hover:bg-gray-6 pt-[15px] pr-[14px] pb-[14px] pl-[15px] border border-gray-5'
                case 'dark':
                    return 'pt-6 pb-[23px] pl-[35px] pr-12 bg-gray-1 text-white hover:bg-white hover:text-gray-1'
                case 'light':
                default:
                    return 'pt-6 pb-[23px] pl-[35px] pr-12 bg-white text-gray-1 hover:bg-gray-1 hover:text-white'
            }
        }

        return (
            <button type="button" className={`flex items-center gap-[13px] text-xs tracking-[0.2em] leading-3 uppercase duration-300 ${getVariantStyles()} ${className}`} {...props} ref={ref}>{children}</button>
        )
    }
)

Button.displayName = 'Button'

export default Button
