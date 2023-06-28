import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

const Herosection = () => {

  const Herocontainer = styled(Box)({
  
})

  return (
    <>
     <Container maxWidth="lg" >
        <Box  mt ={'50px'}  height={'400px'}  sx={{ backgroundImage: 'url(../bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius:'8px'}}>
          
         
          <Box >

      <Stack spacing={2}>
      <Typography  variant='h5' color={'black'}>CREATE + READ + UPDATE + DELETE</Typography>
          <Typography  variant='p' color={'black'}>Create your First Post</Typography>
          <button variant="contained">Contained</button>
      </Stack>
    </Box>
   </Box>
      </Container>
    </>
   

  );
};

export default Herosection;
