import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const Herosection = () => {

  const Herocontainer = styled(Box)({
  
})

  return (
    <>
     <Container maxWidth="md">
        <Box height={'400px'}  sx={{ backgroundImage: 'url(../bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', }}>
          
          <Typography color={'black'}>CREATE + READ + UPDATE + DELETE</Typography>
   </Box>
      </Container>
    </>
   

  );
};

export default Herosection;
