import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import ArrowRight from '../../../public/assets/icons/arrow-right';
import Image from 'next/image';
import about1 from '../../../public/assets/images/about-1.jpg'
import about2 from '../../../public/assets/images/about-2.jpg'
import about3 from '../../../public/assets/images/about-3.jpg'

const AboutSection = () => {
    return (
        <section className="pt-[60px] pb-[60px]">
            <div className="container">
                <div className="bg-gray-8 p-[30px]">
                    <div className="w-[1000px] max-w-full flex items-start justify-between gap-[30px] ml-[60px]">
                        <div className="flex items-start gap-[30px] mb-[-60px]">
                            <div className="flex flex-col gap-[30px]">
                                <Image src={about1} alt="About" width={270} height={265} />
                                <Image src={about2} alt="About" width={270} height={140} />
                            </div>
                            <div className="flex flex-col gap-[30px] mt-[30px]">
                                <Image src={about3} alt="About" width={270} height={345} />
                            </div>
                        </div>
                        <div className="flex justify-start flex-col gap-5 w-[400px] max-w-full">
                            <SectionTitle>About</SectionTitle>
                            <p className="mb-[15px] font-light leading-[25px] text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <Button variant="light" className="w-[222px]">
                                Read More
                                <ArrowRight/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
