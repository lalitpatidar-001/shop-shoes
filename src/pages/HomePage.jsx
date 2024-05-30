import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Popular from '../components/Popular'
import Explore from '../components/Explore'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Brands/>

        <div className="bg-[#FFFFFF]">
            <Popular/>
            <Explore/>
        </div>
    </div>
  )
}

export default HomePage