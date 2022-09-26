import React from 'react'
import lost from "../assets/home-lost.svg"
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
          <div>
              <img src={lost} height={500} width={500}/>
          </div>
          <div className='text-4xl ml-10'>
            <h1 className='font-bold'>Hello,</h1>
            <h2>My Name is Lorenzo</h2>
            <h2 className='font-bold'>I am a Blockchain Developer</h2>
              <div className=' flex mt-5 items-center'>
              <Link to="Projects" smooth duration={500} class=" text-sm bg-indigo-500 hover:bg-purple-400 text-white font-bold py-1 px-4 rounded mr-5">
                My work
                </Link>
                <button class=" text-sm bg-indigo-500 hover:bg-purple-400 text-white font-bold py-1 px-4 rounded">
                 My Resume
                </button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Home