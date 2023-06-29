import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';

import Stack from '@mui/material/Stack';

import { Avatar, Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Herosection = () => {

const [first, setfirst] = useState('second')

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
        
        <Box mt={'50px'} pb={30}>
          <Box><Typography fontFamily={'Inter'} color={'white'} >Posts Created</Typography></Box>
          <Box mt={5} gap={3} style={{ display: 'flex' }}>
            
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
      </Container>
    </>
   

  );
};

export default Herosection;
