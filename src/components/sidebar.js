import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import Emmanuel from '../assets/emmanuel.jpg'

const navitems = [
    {
        number: '0',
        text: 'HOME',
        path: '/'
    },
    {
        number: '1',
        text: 'ABOUT',
        path: '/about'
    },
    {
        number: '2',
        text: 'EDUCATION',
        path: '/education'
    },
    {
        number: '3',
        text: 'WORK',
        path: '/work'
    },
    {
        number: '4',
        text: 'CONTACT',
        path: '/contact'
    },
    {
        number:'5',
        text: 'BLOG',
        path: '/blog'
    },
]

export default function Sidebar() {
    const location = useLocation();
    const [nav, setNav] = useState(false);
    const { changeMode, mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }

  return (
    <div className={`md:w-1/4 ${mode}`}>
        <div className='md:hidden pt-5 flex items-center justify-between px-5'>
            <svg onClick={() => setNav(true)} className='block h-6 w-6 ml-5 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <div onClick={toggleMode} className='mode mt-0'>
                <img src={ mode === 'dark' ? "./img/light_mode_white.svg" : "./img/darkmode.svg" } alt="mode" className='h-5' />
                <p className='font-body'>{ mode === 'dark' ? 'Light Mode' : 'Dark mode' }</p>
            </div>
        </div>
    <div className='dark:bg-gray-900 hidden md:flex bg-grey h-[100%] flex-col items-center'>

        <div className='flex flex-col items-center gap-2'>
            <div>
                <img className='rounded-full h-28 mt-20' src={Emmanuel} alt="img" />
            </div>
            <h2 className='text-center font-body font-bold text-2xl mt-3'>Emmanuel Adisa</h2>
            <p className='text-center font-body text-sm'><span className='font-light text-[#2c98f0]'>FRONTEND WEB DEVELOPER</span><br /> IN NIGERIA.</p>
        </div>

        <div>
            <ul className='flex flex-col mt-10 gap-5'>
                {navitems.map((nav) => (
                    <Link className={location.pathname === nav.path ? 'font-body text-[#2c98f0] border-b-2 border-[#2c98f0]' : 'font-body'} key={nav.number} to={nav.path}>
                        {nav.text}
                    </Link>
                ))}
            </ul>
        </div>

        <div onClick={toggleMode} className='mode'>
            <img src={ mode === 'dark' ? "./img/light_mode_white.svg" : "./img/darkmode.svg" } alt="mode" className='h-5' />
            <p className='font-body'>{ mode === 'dark' ? 'Light Mode' : 'Dark mode' }</p>
        </div>

        <div className='mt-10 opacity-50'>
            <p className='font-body text-sm'>&#169; Copyright 2022.</p>
            <p className='font-body text-sm'>All rights reserved.<br /> BohemianCode-x.</p>
        </div>

    </div>

    <div className={nav ? 'mobilenav' : 'hidden'}>
                <div className='flex flex-col items-center gap-2'>
                    <div>
                        <img className='rounded-full h-28 mt-20' src={Emmanuel} alt="img" />
                    </div>
                    <h2 className='text-center font-body font-bold text-2xl mt-3'>Emmanuel Adisa</h2>
                    <p className='text-center font-body text-sm'><span className='font-light text-[#2c98f0]'>FRONTEND WEB DEVELOPER</span><br /> IN NIGERIA.</p>
                </div>
                    <svg onClick={() => setNav(false)} className='absolute cursor-pointer top-8 right-8 h-10 w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div className='flex flex-col gap-5 mt-28 px-10 items-center'>
                        {navitems.map((nav) => (
                                <Link onClick={() => setNav(false)} key={nav.number} className={location.pathname == nav.path ? 'font-body text-[#2c98f0] border-b-2 border-[#2c98f0]' : 'font-body'} to={nav.path}>
                                    {nav.text}
                                </Link>
                            ))}
                     </div>
        </div>
    </div>
  )
}
