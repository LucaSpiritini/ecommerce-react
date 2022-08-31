import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Wrapper from '../Wrapper'

import become_a_member from '../../assets/become_a_member.svg'
import become_photo from '../../assets/become_photo.webp'
import plus from '../../assets/plus_white.svg'

import styles from './styles'

const Become = () => {
  return (
    <Box sx={styles.become}>
      <Wrapper>
        <Box component='img' src={become_a_member} />
        <Box sx={styles.info}>
          <Box>
            <Typography variant='h2' sx={styles.title}>
              Become a Member
            </Typography>
            <Typography variant='body2' sx={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo,
              <br />
              <br />
              vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
              diam quis enim lobortis scelerisque fermentum dui faucibus in
              ornare quam viverra orci
            </Typography>
            <Button sx={styles.btn}>
              <Box component='img' src={plus} sx={{ mr: '14px' }} />{' '}
              <span>Register</span>
            </Button>
          </Box>
          <Box component='img' src={become_photo} sx={{ width: '100%', maxWidth: "400px", borderRadius: "10%", }} />
        </Box>
      </Wrapper>
    </Box>
  )
}

export default Become
