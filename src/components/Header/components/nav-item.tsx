'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

type NavItemProps = {
    url: string
    className?: string
}

export const NavItem = ({ children, url, className, }: PropsWithChildren<NavItemProps>) => {
    const pathname = usePathname()

    const lineStyles = `w-${pathname === url ? 'full' : '0'} h-[1px] bg-gray-1 duration-300 group-hover:w-full`

    return (
        <Link href={url} className={className}>
            <span className="min-w-[68px] flex flex-col items-center gap-1 group">
                <span className={lineStyles}/>
                <span className="uppercase text-xs tracking-[0.2em] leading-3 text-gray-1">{children}</span>
                <span className={lineStyles}/>
            </span>
        </Link>
    )
}