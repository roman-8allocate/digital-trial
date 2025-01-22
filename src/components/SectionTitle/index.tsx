import { PropsWithChildren } from 'react';

const SectionTitle = ({ children }: PropsWithChildren) => (
    <h2 className="font-light text-gray-4 text-[64px] leading-[64px]">{children}</h2>
)

export default SectionTitle
