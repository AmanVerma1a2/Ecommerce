import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="Contact" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Stores</p>
          <p className="text-gray-500">
            3434 North Sentinel <br />
            Andban nicobar island near bermuda triangle
          </p>
          <p className="text-gray-500">
            Telephone no. 123-4453443-343 <br />
            Email: everyone@awesome.com
          </p>
          <p className="font-semibold text-xl text-gray-600">Careers at Awesome</p>
          <p className="text-gray-500">Learn more about contacting us</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-orange-400 hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
