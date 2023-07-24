import { useState } from 'react'
import Carousel from '../../Banner/Carousel'
import CarouselChildren from '../../Banner/CarouselChildren'

export default function SlideShow() {
  const slides = [
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1613&q=80',
    'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1535025075092-5a1cf795130b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80'
  ]

  const [curr, setCurr] = useState(0)

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  }
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  }

  const prevIndex = curr === 0 ? slides.length - 1 : curr - 1
  const nextIndex = curr === slides.length - 1 ? 0 : curr + 1

  return (
    <div className='flex flex-row items-center justify-center overflow-hidden'>
      <div className='relative'>
        <div className='w-[900px]'>
          <CarouselChildren slides={slides} curr={prevIndex} left={true} />
        </div>
      </div>
      <div className='relative'>
        <div className='w-[900px]'>
          <Carousel slides={slides} curr={curr} prev={prev} next={next} />
        </div>
      </div>
      <div className='relative'>
        <div className='w-[900px]'>
          <CarouselChildren slides={slides} curr={nextIndex} />
        </div>
      </div>
    </div>
  )
}
