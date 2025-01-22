import { PropsWithChildren } from 'react';

export const Title = ({ children }: PropsWithChildren) => {
    return (
        <h3 className="text-white text-base leading-[18.75px] font-bold">{children}</h3>
    )
}