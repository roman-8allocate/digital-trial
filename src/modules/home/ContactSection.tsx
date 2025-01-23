import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

import contact from '../../../public/assets/images/contact.jpg'
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Button from '@/components/Button';
import ArrowRight from '../../../public/assets/icons/arrow-right';

const ContactSection = () => {
    return (
        <section className="pt-[60px] pb-[60px]">
            <div className="container flex flex-col gap-[22px]">
                <SectionTitle>Contact Us</SectionTitle>
                <form action="#" className="flex flex-col items-start gap-[77px]">
                    <div className="flex gap-[30px]">
                        <div className="flex flex-col gap-[10px] w-[391px]">
                            <Input type="text" placeholder="Name"/>
                            <Input type="tel" required placeholder="Phone Number"/>
                            <Input type="email" required placeholder="E-mail"/>
                            <Input type="text" placeholder="Interested In"/>
                            <Textarea required placeholder="Message"/>
                        </div>
                        <Image src={contact} alt="Contact image"/>
                    </div>
                    <Button type="submit" variant="dark">Send Email <ArrowRight /></Button>
                </form>
            </div>
        </section>
    )
}

export default ContactSection
