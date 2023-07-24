import React from 'react'
import { FaLocationDot, FaPeopleGroup } from 'react-icons/fa6'

export interface CampaignProps {
  name?: string
  location?: string
  distance?: number
  startDate?: string
  endDate?: string
  image?: string
  isSlide?: boolean
  isNew?: boolean
}

export default function Campaign(props: CampaignProps) {
  return props.isSlide ? (
    <div className='m-2 h-[300px] w-[440px] rounded-lg bg-white shadow-lg'>
      <div className='top h-[190px] w-full overflow-hidden rounded-t-lg'>
        <img
          className='h-full w-full object-cover'
          src='https://plus.unsplash.com/premium_photo-1689685156566-427e74ac8a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
          alt=''
        />
      </div>
      <div className='sticky top-0 flex translate-y-[-15px] items-center space-x-32 px-6'>
        <div className='time rounded-xl bg-primary py-1 px-5 text-base font-light text-white'>29/07/2023</div>
        <button className='button-tertiary cursor-pointer'>Đăng ký ngay</button>
      </div>
      <div className='bottom translate-y-[-15px] px-5'>
        <div className='name flex items-center'>
          <div className='name text-xl font-bold'>Campaign Name</div>
        </div>
        <div className='club flex flex-col'>
          <div className='club flex flex-row items-center text-lg font-light '>
            <FaPeopleGroup size={20} />
            <span className='pl-2'>Câu lạc bộ chim sẻ</span>
          </div>
          <div className='distance flex flex-row items-center text-lg font-light'>
            <FaLocationDot size={20} />
            <span className='pl-2'>3 km</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='m-2 h-[300px] w-[440px] rounded-lg bg-white shadow-lg'>
      <div className=' top relative h-[190px] w-full overflow-hidden rounded-t-lg'>
        <img
          className='h-full w-full object-cover'
          src='https://plus.unsplash.com/premium_photo-1689685156566-427e74ac8a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
          alt=''
        />
        {props.isNew && (
          <span className='absolute top-2 right-2 rounded bg-red-500 px-2 py-1 text-xs text-white'>Chiến dịch mới</span>
        )}
      </div>
      {/* <div className='sticky top-0 flex translate-y-[-15px] items-center space-x-32 px-6'>
        <div className='time rounded-xl bg-primary py-1 px-5 text-base font-light text-white'>29/07/2023</div>
        <button className='button-tertiary cursor-pointer'>Đăng ký ngay</button>
      </div> */}
      <div className='bottom flex flex-row justify-between px-5 pt-3'>
        <div className='left'>
          <div className='name flex items-center'>
            <div className='name text-xl font-bold'>Campaign Name</div>
          </div>
          <div className='club flex flex-col'>
            <div className='club flex flex-row items-center text-lg font-light '>
              <FaPeopleGroup size={20} />
              <span className='pl-2'>Câu lạc bộ chim sẻ</span>
            </div>
            <div className='distance flex flex-row items-center text-lg font-light'>
              <FaLocationDot size={20} />
              <span className='pl-2'>3 km</span>
            </div>
          </div>
        </div>
        <div className='right flex items-end'>
          <button className='button-quaternary cursor-pointer'>Đăng ký ngay</button>
        </div>
      </div>
    </div>
  )
}
