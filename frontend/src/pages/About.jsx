import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>

    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>

      <div className='my-10 flex flex-col md:flex-row gap-16'>

<img  className='w-full md:max-w-[450px]'src={assets.about_img} alt="" />

<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>

<p>Discover Awsome clothes 100% original high quality to the priincipal please give me leave thank you</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ea in a dolor fugiat reprehenderit consequuntur suscipit quod rem delectus corrupti officia neque dolore quasi voluptatem debitis, non nostrum possimus?</p>
<b className='text-gray-800'>Our Moto</b>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam, tempore error, asperiores quisquam at obcaecati cum sit et laboriosam facere tempora. Doloribus ipsa sapiente reprehenderit quaerat sed, quae repellat?</p>
</div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officiis quod, provident nam vero quos. Distinctio sapiente beatae </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officiis quod, provident nam vero quos. Distinctio sapiente beatae </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officiis quod, provident nam vero quos. Distinctio sapiente beatae </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
    </div>
  )
}

export default About
