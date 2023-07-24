import { useState, useEffect } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

interface CarouselProps {
  autoSlide?: boolean
  autoSlideInterval?: number
  slides: string[]
  curr: number
  prev: () => void
  next: () => void
}

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
  curr,
  next,
  prev
}: CarouselProps) {
  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className='relative h-[400px] overflow-hidden'>
      <div
        className='flex bg-primary transition-transform duration-500 ease-out'
        style={{
          transform: `translateX(-${Math.min(curr, slides.length - 1) * 100}%${curr === slides.length - 1 ? ')' : ''}`
        }}
      >
        {slides.map((img, index) => (
          <img key={index} src={img} alt='' />
        ))}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button onClick={prev} className='rounded-full bg-primary p-2 text-gray-800 shadow hover:bg-white'>
          <FaAngleLeft size={32} color='white' />
        </button>
        <button onClick={next} className='rounded-full bg-primary p-2 text-gray-800 shadow hover:bg-white'>
          <FaAngleRight size={32} color='white' />
        </button>
      </div>

      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((_, i) => (
            <div
              className={`
              h-3 w-3 rounded-full bg-white transition-all
              ${curr === i ? 'p-2' : 'bg-opacity-50'}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
