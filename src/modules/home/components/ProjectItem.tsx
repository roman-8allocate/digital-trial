import Image, { StaticImageData } from 'next/image';
import ArrowRight from '../../../../public/assets/icons/arrow-right';
import Link from 'next/link';

type ProjectItemProps = {
    href: string
    image: StaticImageData
    projectName: string
    className?: string
    overlayClassName?: string
}

export const ProjectItem = ({ href, image, projectName, className, overlayClassName }: ProjectItemProps) => {
    return (
        <Link href={href} className={`flex relative group ${className}`}>
            <Image src={image} alt="project-image" />
            <div className={`${overlayClassName} absolute left-0 top-0 w-full h-full flex flex-col justify-center gap-2 bg-opacity-80 bg-gray-1 pl-[79px] opacity-0 group-hover:opacity-100 duration-300`}>
                <span className="font-bold text-[64px] leading-[64px] text-white w-[240px]">{projectName}</span>
                <span className="flex items-center gap-5 text-white font-gothic uppercase text-xs leading-3 tracking-[0.2em]">
                    View More
                    <ArrowRight />
                </span>
            </div>
        </Link>
    )
}