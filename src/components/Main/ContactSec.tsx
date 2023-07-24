import { Button } from 'flowbite-react'
import React from 'react'

export default function ContactSec() {
  return (
    <div className='flex flex-row justify-center space-x-32 py-10'>
      <div className='avatar'>
        <img
          src='https://images.unsplash.com/photo-1632324343640-86af9827dbeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
          alt=''
          className='h-[200px] w-[200px] rounded-full'
        />
      </div>
      <div className='info flex flex-col items-center'>
        <p className='text-center text-2xl font-bold text-primary'>Những chiến dịch ở gần bạn</p>
        <p className='mt-5 w-[400px] text-center text-xl font-normal text-primary'>
          Đừng lo lắng, hãy để lại thông tin để các câu lạc bộ liên lạc với bạn nhé!
        </p>
        <button className='button-primary mt-5 py-2 font-light'>Tham gia ngay!</button>
      </div>
    </div>
  )
}
