import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const Floatbtn = () => {
  return (
    <Box
    sx={{
      '& > :not(style)': { m: 1 },
      display: { xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
      position: 'fixed',
      bottom: '16px',
      right: '16px',
      zIndex: 9999,
    }}
  >
    <Fab color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  </Box>
  )
}

export default Floatbtn;