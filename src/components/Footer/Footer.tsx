import React from 'react'
import logoLight from 'assets/images/logo-light.png'
import { FaFacebook, FaInstagram, FaYoutube, FaHouseMedical } from 'react-icons/fa6'
import { AiFillHome, AiFillPhone } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'

export default function Footer() {
  return (
    <div className='bg-primary'>
      <div className='footer-top pt-5'>
        <div className='container mx-auto grid grid-cols-3 gap-4'>
          <div className='col-span-1 flex flex-col items-center'>
            <img src={logoLight} className='' alt='' />
            <div className='social ml-12 mt-5 flex flex-row justify-start space-x-10'>
              <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                <FaFacebook size={24} color='#91F460' />
              </a>
              <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
                <FaInstagram size={24} color='#91F460' />
              </a>
              <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
                <FaYoutube size={24} color='#91F460' />
              </a>
            </div>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <div className='info-ecoDev flex flex-col items-start'>
              <span className='text-center text-2xl font-medium text-white'>Liên Hệ</span>
              <div className='mt-5 flex flex-row'>
                <AiFillHome size={24} color='#91F460' />
                <span className='ml-2 max-w-[300px] text-sm font-light text-white'>
                  54 Nguyễn Lương Bằng, Hòa Khánh Bắc, Liên Chiểu Đà Nẵng
                </span>
              </div>
              <div className='mt-5 flex flex-row'>
                <GrMail size={24} color='#91F460' />
                <span className='ml-2 max-w-[300px] text-sm font-light text-white'>admin@ecodev.dev</span>
              </div>
              <div className='mt-5 flex flex-row'>
                <AiFillPhone size={24} color='#91F460' />
                <span className='ml-2 max-w-[300px] text-sm font-light text-white'>+849677123123</span>
              </div>
            </div>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <span className='font- text-center text-2xl font-medium text-white'>ĐỒNG HÀNG CÙNG ECODEV</span>
          </div>
        </div>
      </div>
      <div className='footer-botton pt-5 pb-5'>
        <div className='container mx-auto grid max-w-[70%] grid-cols-4 gap-4'>
          <div className='col-span-1 flex flex-col items-center'>
            <a href=''>
              <span className='text-secondary'>ECODEV © All rights reserved</span>
            </a>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <a href=''>
              <span className='text-secondary'>Chính sách bảo mật</span>
            </a>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <a href=''>
              <span className='text-secondary'>Quy định tham gia</span>
            </a>
          </div>
          <div className='col-span-1 flex flex-col items-center'>
            <a href=''>
              <span className='text-secondary'>Điều khoản </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
