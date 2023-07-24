import React from 'react'
import { Link } from 'react-router-dom'
import logoDark from 'assets/images/logo-dark.png'
import logoLight from 'assets/images/logo-light.png'
import { FaPeopleGroup, FaHeartCirclePlus, FaShieldHeart, FaAngellist } from 'react-icons/fa6'

export default function Header() {
  return (
    <>
      <div className='mx-auto flex max-w-[75%] items-center justify-between p-4'>
        <div className='flex items-center'>
          <div className='cursor-pointer'>
            <img src={logoDark} alt='logo-ECODEV' width={125} height={70} />
          </div>
        </div>
        <div className='flex items-center  px-2'>
          <ul className='flex flex-row space-x-8'>
            <li className='flex items-center justify-center '>
              <Link to='/about' className='text-xl font-semibold text-primary hover:text-gray-300'>
                Thông tin
              </Link>
            </li>
            <li className='flex items-center justify-center'>
              <Link to='/blogs' className='text-xl font-semibold text-primary hover:text-gray-300'>
                Blogs
              </Link>
            </li>
            <li className='flex items-center justify-center'>
              <Link to='/contact' className='text-xl font-semibold text-primary hover:text-gray-300'>
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center'>
          <button className='button-primary'>Đăng nhập</button>
        </div>
      </div>
      <div className='mx-auto max-w-[100%] bg-primary p-4'>
        <div className='mx-auto flex max-w-[75%] items-center justify-between'>
          <div className='item-center flex justify-between'>
            <FaPeopleGroup size={24} color='white' />
            <span className='ml-3 text-base font-normal text-white'>Cộng đồng</span>
          </div>
          <div className='item-center flex justify-between'>
            <FaHeartCirclePlus size={24} color='white' />
            <span className='ml-3 text-base font-normal text-white'>400+ câu lạc bộ</span>
          </div>
          <div className='item-center flex justify-between'>
            <FaShieldHeart size={24} color='white' />
            <span className='ml-3 text-base font-normal text-white'>An toàn tuyệt đối</span>
          </div>
          <div className='item-center flex justify-between'>
            <FaAngellist size={24} color='white' />
            <span className='ml-3 text-base font-normal text-white'>5+ giải thưởng tình nguyện</span>
          </div>
        </div>
      </div>
    </>
  )
}
