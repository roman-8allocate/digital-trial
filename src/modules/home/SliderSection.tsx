'use client'

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Image from 'next/image';
import slideImage from '../../../public/assets/images/slide.jpg'
import Button from '@/components/Button';
import ArrowRight from '../../../public/assets/icons/arrow-right';
import { SelectedSnapDisplay, useSelectedSnapDisplay } from '@/modules/home/components/SelectedSnapDisplay';
import ArrowLeft from '../../../public/assets/icons/arrow-left';

const slides = [
    {
        image: slideImage,
        firstText: 'Project',
        secondText: 'Lorum'
    },
    {
        image: slideImage,
        firstText: 'Project',
        secondText: 'Lorum2'
    }
]

const SliderSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30, containScroll: false }, [Fade()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

    return (
        <section className="pb-[60px]">
            <div className="container">
                <div className="overflow-hidden h-[829px]">
                    <div ref={emblaRef}>
                        <div className="flex w-full">
                            {slides.map((slide, index) => (
                                <div key={`${index}-${slide.firstText}`}
                                     className="flex flex-slide items-center justify-between gap-1">
                                    <div className="flex flex-col">
                                        <h2 className="uppercase font-light text-[64px] leading-[64px] text-gray-4">{slide.firstText}</h2>
                                        <h2 className="font-bold text-[64px] leading-[64px] text-gray-1">{slide.secondText}</h2>
                                    </div>
                                    <div>
                                        <Image
                                            src={slide.image}
                                            width={770}
                                            height={829}
                                            alt="slide"
                                        />
                                        <Button variant="light"
                                                className="flex items-center gap-[13px] mt-[-71px] relative">
                                            View Project
                                            <ArrowRight/>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-[90px] mt-[-278px] relative">
                        <div className="flex gap-[23px]">
                            <Button variant="slider-arrow" onClick={scrollPrev}>
                                <ArrowLeft />
                            </Button>
                            <Button variant="slider-arrow" onClick={scrollNext}>
                                <ArrowRight/>
                            </Button>
                        </div>
                        <SelectedSnapDisplay
                            selectedSnap={selectedSnap}
                            snapCount={snapCount}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SliderSection
