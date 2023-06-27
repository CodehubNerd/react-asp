import React from 'react';
import { Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';

const Herosection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-brunette-woman-staying-her-workplace_273609-36911.jpg?w=740&t=st=1687866926~exp=1687867526~hmac=be79a3136742c7ad1a0cf8875e2bd64b5a036d14fb74cf98dd823e0d0a70f921')", // Replace with the path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff', // Color for the text
      }}
    >
      <Container fixed>
        <Typography variant="h3">masiko</Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Container>
    </div>
  );
};

export default Herosection;
