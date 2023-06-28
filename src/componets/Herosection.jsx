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

      <Stack spacing={2} style={{padding:'100px'}}>
      <Typography color={'white'} variant='h5' fontSize={'50px'}fontFamily={'Inter'} fontWeight={700}>CREATE + READ + UPDATE + DELETE</Typography>
          <Typography fontFamily={'Inter'} color={'white'}  variant='p' >Create your First Post</Typography>
          <Box><Button fontFamily={'Inter'} fontWeight={700} variant="contained">Create Post</Button></Box>
      </Stack>
    </Box>
        </Box>
        
        <Box mt={'50px'}>
          <Box><Typography fontFamily={'Inter'} color={'white'} >Post Created</Typography></Box>
          
          </Box>
      </Container>
    </>
   

  );
};

export default Herosection;
