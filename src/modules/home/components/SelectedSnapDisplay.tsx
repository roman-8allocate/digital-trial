import { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

type UseSelectedSnapDisplayType = {
    selectedSnap: number
    snapCount: number
}

export const useSelectedSnapDisplay = (
    emblaApi: EmblaCarouselType | undefined
): UseSelectedSnapDisplayType => {
    const [selectedSnap, setSelectedSnap] = useState(0)
    const [snapCount, setSnapCount] = useState(0)

    const updateScrollSnapState = useCallback((emblaApi: EmblaCarouselType) => {
        setSnapCount(emblaApi.scrollSnapList().length)
        setSelectedSnap(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        updateScrollSnapState(emblaApi)
        emblaApi.on('select', updateScrollSnapState)
        emblaApi.on('reInit', updateScrollSnapState)
    }, [emblaApi, updateScrollSnapState])

    return {
        selectedSnap,
        snapCount
    }
}

type PropType = {
    selectedSnap: number
    snapCount: number
}

export const SelectedSnapDisplay = (props: PropType) => {
    const { selectedSnap, snapCount } = props

    return (
        <div className="flex items-center text-gray-4 text-xl leading-6">
            {selectedSnap + 1 < 10 ? `0${selectedSnap + 1}` : selectedSnap + 1}
            <div className="w-[44px] h-[2px] bg-gray-7 -rotate-45 ml-[26px] mr-[32px]" />
            {snapCount < 10 ? `0${snapCount}` : snapCount}
        </div>
    )
}
