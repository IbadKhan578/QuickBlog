import React from 'react'
import {assets} from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <div className='px-6 sm:px-16 lg:px24 xl:px-32 bg-primary/3'>
        <div className='flex flex-col md:flex-row gap-10 items-start justify-between py-10 border-b border-gray-500/30 text-gray-500'>
           <div>
            <img  src={assets.logo} className='w-32 sm:w-44 cursor-pointer' alt="" />
            <p className='max-w-[410px] mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?</p>
           </div>
           <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5' >
            <div>
                <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2' >Quick Links</h3>
                 <ul className='text-sm space-y-1'>
                    <li > <a className='hover:underline transition cursor-pointer' href="#">Home</a></li>
                    <li ><a className='hover:underline transition cursor-pointer' href="#">Best Sellers</a>    </li>
                    <li ><a className='hover:underline transition cursor-pointer' href="#">Offers & Deals    </a>    </li>
                    <li ><a className='hover:underline transition cursor-pointer' href="#">Contact Us    </a>    </li>
                    <li ><a className='hover:underline transition cursor-pointer' href="#">FAQS         </a>   </li>
                </ul>
            </div>

              <div>
                <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2' >Need Help?</h3>
                <ul className='text-sm space-y-1'>
                    <li > <a className='hover:underline transition cursor-pointer' href="#">Delivery Information</a></li>
                    <li ><a className='hover:underline transition cursor-pointer' href="#">Return & Refund Policy</a>    </li>
                    <li ><a className='hover:underline transition cursor-pointer' href="#">Payment Methods      </a>    </li>
                    <li ><a className='hover:underline transition cursor-pointer' href="#">Track your Orders    </a>    </li>
                    <li ><a className='hover:underline transition cursor-pointer' href="#">Contact Us           </a>   </li>
                </ul>
            </div>

              <div>
                <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2' >Follow Us</h3>
                <ul className='text-sm space-y-1'>
                    <li > <a className='hover:underline transition cursor-pointer' href="#">Instagram</a></li>
                    <li ><a className='hover:underline transition cursor-pointer' href="#">Twitter</a>    </li>
                    <li ><a className='hover:underline transition cursor-pointer' href="#">Facebook      </a>    </li>
                    <li ><a className='hover:underline transition cursor-pointer' href="#">youtube   </a>    </li>
                </ul>
            </div>

           </div>

        </div>

        <p className='py-6 text-center text-sm md-base text-gray-500/80'>Copyright 2025 © QuickBlog IbadKhan - All Right Reserved.</p>

    </div>
  )
}

export default Footer