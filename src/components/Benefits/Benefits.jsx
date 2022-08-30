import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

//IMPORTING SVG'S
import foto_group from '../../assets/Group.png'
import foro_1 from '../../assets/group1.svg'
import foro_2 from '../../assets/group2.svg'
import foro_3 from '../../assets/group3.svg'

import styles from './styles'

const info = [
  {
    img: foro_1,
    title: 'Online Degrees',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,',
  },
  {
    img: foro_2,
    title: 'Short courses',
    text: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    img: foro_3,
    title: 'Expert Traning',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,',
  },
]

const Benefits = () => {
  return (
    <Box sx={styles.benefits}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.info}>
          <Box
            component='img'
            src={foto_group}
            sx={{ width: '100%', maxWidth: '575px' }}
          />
          <Box>
            <Typography variant='h2' sx={styles.title}>
              Benifits from our online learning
            </Typography>
            <Box sx={{ mt: '30px' }}>
              {info.map((item, index) => {
                return (
                  <Box sx={styles.boxInfoItem} key={index}>
                    {' '}
                    <Box component='img' src={item.img} />{' '}
                    <Box>
                      <Typography sx={styles.boxInfoItemTitle}>
                        {item.title}
                      </Typography>
                      <Typography sx={styles.boxInfoItemText}>
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Benefits
