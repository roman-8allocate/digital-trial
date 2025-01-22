import Image from 'next/image';
import Link from 'next/link';
import { Title } from '@/components/Footer/components/title';
import { NavItem } from '@/components/Footer/components/nav-item';
import logoWhite from '../../../public/assets/images/logo-white.png';
import Pin from '../../../public/assets/icons/pin'
import Phone from '../../../public/assets/icons/phone';
import Mail from '../../../public/assets/icons/mail';
import Facebook from '../../../public/assets/icons/facebook';
import Twitter from '../../../public/assets/icons/twitter';
import LinkedIn from '../../../public/assets/icons/linked-in';
import Pinterest from '../../../public/assets/icons/pinterest';

const Footer = () => {
    return (
        <footer className="bg-gray-2">
            <div className="container">
                <div className="flex justify-between pt-[58px] pb-[60px]">
                    <Link href="/">
                        <Image
                            src={logoWhite}
                            className="min-w-[145px]"
                            width={145}
                            height={94}
                            alt="Logo"
                            priority
                        />
                    </Link>
                    <div className="flex gap-[165px] mr-[131px]">
                        <div className="flex flex-col gap-[25px]">
                            <Title>Sitemap</Title>
                            <div className="flex flex-col gap-4">
                                <NavItem href="/">Home</NavItem>
                                <NavItem href="/gallery">Gallery</NavItem>
                                <NavItem href="/projects">Projects</NavItem>
                                <NavItem href="/certifications">Certifications</NavItem>
                                <NavItem href="/contact">Contact</NavItem>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[25px]">
                            <Title>Company Info</Title>
                            <div className="flex flex-col">
                                <div className="flex text-white gap-4 mb-[56px]">
                                    <div className="w-4">
                                        <Pin/>
                                    </div>
                                    <span className="text-sm font-medium leading-6 tracking-[0.03em] w-[175px]">1234 Sample Street Austin Texas 78704</span>
                                </div>
                                <div className="flex text-white gap-4 mb-[32px]">
                                    <div className="w-4">
                                        <Phone/>
                                    </div>
                                    <a href="tel:512.333.2222"
                                       className="text-sm font-medium leading-6 tracking-[0.03em] w-[175px]">512.333.2222</a>
                                </div>
                                <div className="flex text-white gap-4">
                                    <div className="w-4">
                                        <Mail />
                                    </div>
                                    <a href="mailto:sampleemail@gmail.com"
                                       className="text-sm font-medium leading-6 tracking-[0.03em] w-[175px]">sampleemail@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mr-[77px]">
                        <Title>Company Info</Title>
                        <div className="flex items-center gap-10">
                            <a href="#" className="text-white">
                                <Facebook />
                            </a>
                            <a href="#" className="text-white">
                                <Twitter />
                            </a>
                            <a href="#" className="text-white">
                                <LinkedIn />
                            </a>
                            <a href="#" className="text-white">
                                <Pinterest />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-white opacity-10"></div>
            <div className="py-6">
                <div className="container text-center">
                    <span className="font-open-sans text-xs leading-[22px] text-gray-3 opacity-50">© 2025 All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
