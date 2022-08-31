import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Wrapper from '../Wrapper'

import banner_photo from '../../assets/banner_hero.webp'
import ant_design_play from '../../assets/ant-design_play-circle-filled.svg'
import bx_bxs_time from '../../assets/bx_bxs-time.svg'
import el_group from '../../assets/el_group.svg'
import planet from '../../assets/planet.svg'

import styles from './styles'

const Hero = () => {
  return (
    <Box sx={styles.hero}>
      <Wrapper>
        <Box sx={styles.info}>
          <Box component='img' sx={styles.imgBanner} src={banner_photo} />
          <Box sx={{ zIndex: 3, position: 'relative' }}>
            <Typography variant='h2' sx={styles.title}>
              the most complete pet supplies market
            </Typography>
            <Typography variant='body1' sx={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repudiandae itaque dolore deserunt sint unde rerum quaerat, consequuntur fuga error ex perferendis
            </Typography>
            <Box sx={styles.wrapperBtn}>
              <Link sx={styles.link}>
                <Box component='img' src={ant_design_play} />
                <Box component='span'>About Us</Box>
              </Link>
              <Button sx={styles.viewBtn}>
                List all products
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.blockCards}>
          <Card sx={styles.card}>
            <Box component='img' src={bx_bxs_time} />
            <Box sx={styles.price}>24hs</Box>
            <Box>Fast Delivery</Box>
          </Card>
          <Card sx={styles.card}>
            <Box component='img' src={el_group} />
            <Box sx={styles.price}>500+</Box>
            <Box>Users</Box>
          </Card>
          <Card sx={styles.card}>
            <Box component='img' src={planet} />
            <Box sx={styles.price}>10+</Box>
            <Box>Countries</Box>
          </Card>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default Hero
