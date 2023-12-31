import React, { useRef,useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { Avatar, Typography } from '@mui/material';
import { Floatbtn } from '../componets';

import Card from '@mui/material/Card';
import Modal from '@mui/material/Modal';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:2,
  boxShadow: 24,
  p: 4,
};

const Herosection = () => {

  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = useState(false)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fileInputRef = useRef(null);


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Process the uploaded file here
    console.log(file);
  };

  const handlePostSubmit = () => {
    // Logic for submitting the post

    // Display the Alert component
    setAlert(true);
    setOpen(false);

   

    // Reset the Alert after a certain duration
    setTimeout(() => {
      setAlert(false);
    }, 3000); // Adjust the duration as needed
  };

  return (
    <>
      <Container maxWidth="lg" >

        

    <Box  mt ={'50px'}  height={'400px'}  sx={{ backgroundImage: 'url(../bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius:'8px'}}>  
    <Box >
      <Stack spacing={2} style={{padding:'100px'}}>
      <Typography  color={'white'} variant='h5' fontSize={'20px'}fontFamily={'Inter'} fontWeight={700}>CREATE + READ + UPDATE + DELETE</Typography>
          <Typography fontFamily={'Inter'} color={'white'} fontSize={'12px'} variant='p' >CREATE YOUR FIRST  POST</Typography>
          <Box><Button sx={{display:{xs:"none",sm:"block"}}} fontFamily={'Inter'} fontWeight={700} variant="contained">Create Post</Button></Box>
      </Stack>
    </Box>
  </Box>












        <div>
  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" fontFamily={'Inter'} fontWeight={700} fontSize={'14px'} variant="h5" component="h2">
           CREATE POST
          </Typography>
          <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
                    autoComplete="off"
                   
    >
      <TextField id="outlined-basic" label="Your name" variant="outlined" />
     
      <TextField required   id="outlined-required" type='file' />
      <Button variant="contained" onClick={handlePostSubmit}>POST</Button>
    </Box>
      </Stack>
    </Box>
        </Box>
      </Modal>
    </div>







        
        <Box mt={'50px'} pb={30}>
          <Box><Typography fontFamily={'Inter'} color={'white'} >Posts Created</Typography></Box>
          
          <Stack sx={{ width: '100%' }} spacing={2}>
        
       
          {alert && <Alert severity="success">Post Created Successfully!</Alert>}
          </Stack>
          
          <Box
        mt={5}
        gap={3}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        sx={{
          '@media (max-width:600px)': {
            flexDirection: 'column',
          },
        }}
      >
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://img.freepik.com/free-photo/african-american-woman-checking-social-media-phone_53876-105397.jpg?size=626&ext=jpg&ga=GA1.1.1087366336.1687774892&semt=ais"
        title="green iguana"
      />
              <CardContent>
                <Box sx={{ display: 'flex'}}>

                <Stack direction="row" sx={{alignItems:'center'}} spacing={1}> 
                <Avatar sx={{ bgcolor:'#0467FC'}}>M</Avatar>
                    <Typography gutterBottom variant="p" fontFamily={'Inter'} fontSize={14} fontWeight={500}>By {'Masiko'}</Typography>
                </Stack>
                
                <Stack direction="row" spacing={1}> 
                  <box>
                  <Tooltip title="Delete">
                      <IconButton sx={{ color: '#0467FC' }}>
                 <DeleteIcon />
                  </IconButton>
                    </Tooltip>
                  </box>

                  <box>
                  <Tooltip title="Edit">
                  <IconButton sx={{ color: '#0467FC' }}  onClick={handleOpen}>
                 <EditIcon />
                  </IconButton>
                    </Tooltip>
                  </box>
          
               
            </Stack>
                </Box>
               
                
     
      </CardContent>
    
    </Card>




          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://img.freepik.com/free-photo/african-american-woman-checking-social-media-phone_53876-105397.jpg?size=626&ext=jpg&ga=GA1.1.1087366336.1687774892&semt=ais"
        title="green iguana"
      />
              <CardContent>
                <Box sx={{ display: 'flex'}}>

                <Stack direction="row" sx={{alignItems:'center'}} spacing={1}> 
                <Avatar sx={{ bgcolor:'#0467FC'}}>M</Avatar>
                    <Typography gutterBottom variant="p" fontFamily={'Inter'} fontSize={14} fontWeight={500}>By {'Masiko'}</Typography>
                </Stack>
                
                <Stack direction="row" spacing={1}> 
                  <box>
                  <Tooltip title="Delete">
                      <IconButton sx={{ color: '#0467FC' }}>
                 <DeleteIcon />
                  </IconButton>
                    </Tooltip>
                  </box>

                  <box>
                  <Tooltip title="Edit">
                  <IconButton sx={{ color: '#0467FC' }}>
                 <EditIcon />
                  </IconButton>
                    </Tooltip>
                  </box>
          
               
            </Stack>
                </Box>
               
                
     
      </CardContent>
    
    </Card>
     

          </Box>
          
        </Box>
        <Floatbtn />
      </Container>
    </>
   

  );
};

export default Herosection;
