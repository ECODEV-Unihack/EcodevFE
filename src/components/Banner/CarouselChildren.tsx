interface CarouselChildrenProps {
  slides: string[]
  curr: number
  left?: boolean
}

export default function CarouselChildren({ slides, curr, left = false }: CarouselChildrenProps) {
  return (
    <div className='relative h-[400px] overflow-hidden blur'>
      <div
        className={`flex bg-primary transition-transform duration-500 ${left ? 'ease-out' : 'ease-in'}`}
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`} />
        ))}
      </div>
    </div>
  )
}
