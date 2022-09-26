import React from 'react'
import LiveChat from '../assets/projects/LiveChat.png'
import Tracker from '../assets/projects/Tracker.png'
import Marketplace from '../assets/projects/marketplace.png'
import { Link } from 'react-router'


const Projects = () => {

    const projects = [
        {
            id: 1,
            src: LiveChat,
            title: "Socket IO Live Chat"
        },
        {
            id: 2,
            src: Tracker,
            title: "Crypto Price Tracker",
            href: "https://github.com/LorenzoMendoza/qwago"
        },
        {
            id: 3,
            src: Marketplace,
            title: "Crypto Price Tracker",
        },
    ]
  return (
    <div name="Projects" className='w-full md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <h1 className='text-5xl'>Portfolio</h1>
                <p className='py-5'>Here or some of the work that  <br/> I have done or projects
                     I am currently working on
                </p>
            </div>

            <div className='grid items sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {projects.map(({id, src, title,href}) =>(
                <div key={1} className='shadow-lg'>
                    <div className='flex text-xl items-center justify-center font-bold border-b-2'> {title}</div>
                    <img src={src}/>
                    <div className='flex items-center justify-center w-full'>
                        <button><a href={href}>View Code</a></button>
                    </div>
                </div>
                )
            )}
            
                
            </div>
        </div>
    </div>
  )
}

export default Projects