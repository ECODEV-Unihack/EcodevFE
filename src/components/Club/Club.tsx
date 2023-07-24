import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import ClampLines from 'react-clamp-lines'

interface ClubProps {
  name?: string
  location?: string
  distance?: number
  date?: string
  image?: string
  size?: string
}

export default function Club(props: ClubProps) {
  return (
    <div className='m-2 h-[500px] w-[440px] rounded-lg bg-white shadow-lg'>
      <div className='top h-[300px] w-full overflow-hidden rounded-t-lg'>
        <img
          className='h-full w-full object-cover'
          src='https://plus.unsplash.com/premium_photo-1689685156566-427e74ac8a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
          alt=''
        />
      </div>
      <div className='bottom pt-4'>
        <div className='name  flex items-center px-5'>
          <div className='name mx-auto text-center text-2xl font-bold'>Club Name</div>
        </div>
        <div className='location flex flex-col px-5'>
          <div className='location items-center text-center text-base font-light'>
            <ClampLines
              text='Hành trình cùng câu lạc bộ bồ câu luôn là những hành trình đầy sáng tạo, trải nghiệm độc đáo qua từng vùng miền đậm chất. Bạn được hóa thân thành những vai trò khác nhau từ chuyên gia truyền thông, đến lần đầu tiên làm cô giáo bản, anh nông dân chuyên cần, hay ngay cả người bản địa hiểu biết. Một cách độc đáo hướng bạn đến những trải nghiệm thú vị.'
              id='really-unique-id'
              lines={2.7}
              ellipsis='...'
              buttons={false}
              innerElement='p'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
