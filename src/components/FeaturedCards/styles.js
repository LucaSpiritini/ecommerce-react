const styles = {
  wrapper: (theme) => ({
    maxWidth: '1240px',
    m: 'auto',
    p: '30px',
  }),
  card: {
    border: '0.5px solid #9980B7',
    boxShadow: '0px 4px 4px rgba(0,0,0,0.2)',
    borderRadius: '8px',
    p: '24px 24px 48px',
    maxWidth: "350px",
  },
  blockPhoto: {
    position: 'relative',
    textAlign: 'center',
    m: "auto",
  },
  category: {
    position: 'absolute',
    background: '#673F86',
    borderRadius: '11px',
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    p: '9px 24px',
    bottom: '-5px',
  },
  footerCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: '24px',
  },
  price: {
    background: '#673F86',
    borderRadius: '11px',
    p: '8px',
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    color: '#FFFFFF',
  },
  link: {
    display: 'flex',
    cursor: "pointer",
    alignItems: 'center',
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 500,
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#000',
    '&>img': {
      mr: '10px',
    },
  },
}

export default styles
