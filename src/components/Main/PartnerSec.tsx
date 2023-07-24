import React from 'react'
import partner1 from '../../assets/images/partner-1.png'
import partner2 from '../../assets/images/partner-2.png'
import partner3 from '../../assets/images/partner-3.png'
import partner4 from '../../assets/images/partner-4.png'

export default function PartnerSec() {
  return (
    <div className='bg-gray-100'>
      <div className='mx-auto max-w-[60%] '>
        <div className='py-4 text-center text-3xl font-bold text-primary'>Nhà tài trợ</div>
        <div className='mt-2 flex flex-row justify-between pb-8'>
          <img src={partner1} alt='' />
          <img src={partner2} alt='' />
          <img src={partner3} alt='' />
          <img src={partner4} alt='' />
        </div>
      </div>
    </div>
  )
}
