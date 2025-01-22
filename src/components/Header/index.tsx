import Link from 'next/link';
import Image from 'next/image'

import logo from '../../../public/assets/images/logo.png'
import { NavItem } from '@/components/Header/components/nav-item';

const Header = () => {
    return (
        <header className="fixed w-full py-[29px] bg-white">
            <div className="container flex justify-between items-center gap-1">
                <Link href="/">
                    <Image
                        src={logo}
                        className="min-w-[70px]"
                        width={70}
                        height={44}
                        alt="Logo"
                        priority
                    />
                </Link>
                <div className="flex w-[770px]">
                    <NavItem url="/" className="mr-[60px]">
                        Home
                    </NavItem>
                    <NavItem url="/gallery" className="mr-[61px]">
                        Gallery
                    </NavItem>
                    <NavItem url="/projects" className="mr-[55px]">
                        Projects
                    </NavItem>
                    <NavItem url="/certifications" className="mr-[46px]">
                        Certifications
                    </NavItem>
                    <NavItem url="/contact">
                        Contact
                    </NavItem>
                </div>
            </div>
        </header>
    )
}

export default Header
