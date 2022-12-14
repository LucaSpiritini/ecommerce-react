import React from 'react'
import Box from '@mui/material/Box'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import FeaturedCard from '../components/FeaturedCards'
import Benefits from '../components/Benefits'
import Become from '../components/Become'

const HomeScreen = () => {
  return (
    <Box>
      <Hero />
      <FeaturedProducts />
      <FeaturedCard />
      <Become />
      <Benefits />
    </Box>
  )
}

export default HomeScreen
