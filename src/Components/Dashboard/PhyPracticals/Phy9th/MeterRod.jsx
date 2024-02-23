import React from 'react'
import meterRod from "../../../../assets/meterRod.png"
import { NavLink } from 'react-router-dom'

const OhmsLaw = () => {
    return (
        <NavLink to='/Dashmain/phypracticals/MeterRod9/theory'>
            <div className='w-64 h-60 bg-overviewWhite border-primaryGradient border-2 rounded-xl relative'>
                <div className="p-4">
                    <img src={meterRod} alt="" className='rounded-md' />
                    <p className="font-semibold text-base text-dark50 mt-2">

                        Verify the principle of moments by using a metre rod balanced on a wedge

                    </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className='absolute bottom-0 right-0'>
                    <rect width="32" height="32" rx="8" fill="url(#paint0_linear_70_3352)" />
                    <path d="M9 16L23 16" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.8271 10L22.8271 16L16.8271 22" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                        <linearGradient id="paint0_linear_70_3352" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00C6FF" />
                            <stop offset="1" stopColor="#0072FF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </NavLink>
    )
}

export default OhmsLaw