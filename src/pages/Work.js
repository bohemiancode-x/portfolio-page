import React from 'react'

const projects = [
  {
    id: 1,
    title:'Space Tourism multi-page website',
    info: 'Built a responsive multi-page website with React and TailwindCSS. Data is injected dynamically from a local JSON file.',
    link: 'https://space-tourism-web-delta.vercel.app/'
  },
  {
    id: 2,
    title: 'Countries List App with Rest API',
    info: 'A responsive react project styled with tailwindcss that dynamically injects information about countries of the world from Rest API with the use of react tools.',
    link: 'http://countries-list-app-with-restapi.vercel.app/'
  },
  {
    id: 3,
    title: 'Recorder-App (Capstone project)',
    info: 'Built a screen recorder web app using React tools and deployed via Vercel.',
    link: 'https://capstone-project-recorder-app-bohemiancodex.vercel.app/'
  },
  {
    id: 4,
    title: 'Coinblock landing page',
    info: 'A simple react project designed to illustrate the use of fetch API functions and injecting API data into the DOM. Data is retrieved from coingecko API.',
    link: 'https://project-coinblock-landing-page.vercel.app/'
  }
]

export default function Work() {
  return (
    <div className='lg:w-[75%]'>
      <div className='mt-5 lg:mt-20 px-5 lg:px-10'>
          <h3 className='text-sm font-body opacity-50 tracking-widest'>WORK</h3>
          <h2 className='mt-5 font-[serif] tracking-widest text-2xl font-bold'>PORTFOLIO</h2>
        </div>

        <div className='mt-10 lg:px-10'>
          <ul className='grid px-5 lg:px-0 lg:grid-cols-2 gap-4'>
            {projects.map((project) => (
              <li className='flex flex-col rounded bg-grey border-2 p-3 border-grey shadow-lg' key={project.id}>
                  <h3 className='font-body font-bold text-xl'>{project.title}</h3>
                  <p className='my-3 font-body opacity-70'>{project.info}</p>
                  <a className='mt-auto' href={project.link}>
                    <button className='w-2/4 font-body flex items-center justify-center gap-2 rounded border-2 border-white p-2 hover:text-white hover:bg-black'>
                      visit site
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </button>
                  </a>
                 
              </li>
            ))}
          </ul>
        </div>

    </div>
  )
}
