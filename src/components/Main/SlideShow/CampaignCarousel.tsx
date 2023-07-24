import Campaign from 'components/Campaign'
import React, { useRef } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 463
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 463
    }
  }

  return (
    <div className='bg-gray-100'>
      <div className='relative mx-auto max-w-[90%]'>
        <div className='py-4 text-center text-2xl font-bold text-primary'>Chiến dịch sắp diễn ra của câu lạc bộ</div>

        <div
          ref={carouselRef}
          className='mx-auto flex max-w-[83%] items-center space-x-1 overflow-hidden scroll-smooth p-3'
        >
          <div>
            <Campaign isSlide={true} />
          </div>
          <div>
            <Campaign isSlide={true} />
          </div>
          <div>
            <Campaign isSlide={true} />
          </div>
          <div>
            <Campaign isSlide={true} />
          </div>
          <div>
            <Campaign isSlide={true} />
          </div>
          <div>
            <Campaign isSlide={true} />
          </div>
          {/* Rest of your Card components */}
        </div>
        <div className='absolute inset-0 mx-auto flex items-center justify-between p-4'>
          <button onClick={scrollLeft} className='rounded-full bg-black/30 p-1 text-gray-800 shadow hover:bg-white'>
            <FiChevronLeft size={28} color='white' />
          </button>
          <button onClick={scrollRight} className='rounded-full bg-black/30 p-1 text-gray-800 shadow hover:bg-white'>
            <FiChevronRight size={28} color='white' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
