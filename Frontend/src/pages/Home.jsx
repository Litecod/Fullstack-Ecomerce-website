import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import Company from '../components/Company'
import PeakyBlinders from '../components/PeakyBlinders'

const Home = () => {
  return (
    <div>
      <Hero />
      <Company />
      <LatestCollection />
      <PeakyBlinders />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home