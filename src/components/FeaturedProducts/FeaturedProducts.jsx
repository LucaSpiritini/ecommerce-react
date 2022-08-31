import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

import eye from '../../assets/eye.svg'

import styles from './styles'

const FeaturedCourses = () => {
  return (
    <Box>
      <Box sx={styles.wrapper}>
        <Box sx={styles.content}>
          <Box sx={{ pr: '20px' }}>
            <Typography sx={styles.topTitle}>#Top Products</Typography>
            <Typography sx={styles.title}>Featured Products</Typography>
          </Box>
          <Divider orientation='vertical' sx={styles.divider} />
          <Typography sx={styles.text}>
            Online Shopping is the easiest nowadays
          </Typography>
        </Box>
        <Button sx={styles.btn}>
          <Box component='img' src={eye} />
        </Button>
      </Box>
    </Box>
  )
}

export default FeaturedCourses
