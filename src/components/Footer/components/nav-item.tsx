import Link from 'next/link';
import { PropsWithChildren } from 'react';

type NavItemProps = {
    href: string
}

export const NavItem = ({ children, href }: PropsWithChildren<NavItemProps>) => {
    return (
        <Link href={href}>
            <span className="text-white font-medium leading-6 tracking-[0.03em]">{children}</span>
        </Link>
    )
}