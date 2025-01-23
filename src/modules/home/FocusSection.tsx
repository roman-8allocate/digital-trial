import SectionTitle from '@/components/SectionTitle';

const FocusSection = () => {
    return (
        <section className="pt-[60px] pb-[60px]">
            <div className="container flex flex-col gap-[60px]">
                <SectionTitle>Main Focus/Mission Statement</SectionTitle>
                <div className="flex justify-between gap-1">
                    <div className="flex gap-[30px] w-[420px]">
                        <span className="font-black text-gray-5 text-[200px] leading-[140px]">1</span>
                        <span className="text-gray-1 text-[22px] leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</span>
                    </div>
                    <div className="flex gap-[30px] w-[570px]">
                        <span className="font-black text-gray-5 text-[200px] leading-[140px]">2</span>
                        <span className="text-gray-1 text-[22px] leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl..</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FocusSection
