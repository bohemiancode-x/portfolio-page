import React from 'react';
import { useTheme } from "../hooks/useTheme";

export default function Blog() {
  const { mode } = useTheme();

  return (
    <div className='lg:w-[75%]'>
      <div className='mt-5 lg:mt-20 px-5 lg:px-10'>
          <h3 className='text-sm font-body opacity-50 tracking-widest'>READ</h3>
          <h2 className='mt-5 font-[serif] tracking-widest text-2xl font-bold'>RECENT BLOG</h2>
      </div>

      <div className='mt-20 px-10'>
        <a href='https://bohemianx.hashnode.dev/' className='flex bg-grey dark:bg-black dark:border-2 dark:border-white p-6 font-body gap-3 items-center lg:w-[50%] rounded text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>
          Go to my hashnode blog
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
        </a>
      </div>

    </div>
  )
}
