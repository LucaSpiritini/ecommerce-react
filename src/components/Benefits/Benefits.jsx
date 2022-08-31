import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import foto_group from '../../assets/group.webp'
import foro_1 from '../../assets/group1.svg'
import foro_2 from '../../assets/group2.svg'
import foro_3 from '../../assets/group3.svg'

import styles from './styles'

const info = [
  {
    img: foro_1,
    title: 'Great disscounts',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
  },
  {
    img: foro_2,
    title: 'Make a wish list',
    text: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    img: foro_3,
    title: 'Big community',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
            sx={{ width: '100%', maxWidth: '575px', borderRadius: "50%", }}
          />
          <Box>
            <Typography variant='h2' sx={styles.title}>
              Benefits for our members
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
