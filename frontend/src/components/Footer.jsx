import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-gray-100 py-1 px-4">
      <div className='grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="Company Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet delectus quaerat, assumenda atque est quae explicabo consequuntur voluptatum doloremque aliquam, eligendi reprehenderit, error ad eveniet veritatis veniam voluptatem autem!
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+990944732049</li>
            <li>contact@awesome.com</li>
          </ul>
        </div>
      </div>

      <hr className="my-5 border-gray-300" />
      <p className='py-5 text-sm text-center'>All Rights Reserved © 2025</p>
    </div>
  )
}

export default Footer
