import React from "react";
import 'normalize.css';

import { Navbar ,Herosection,Posts} from "./componets";
import { Box } from "@mui/material";

function App() {
  return (
    
<Box sx={{backgroundColor:'#001E3C',height:'100vh'}}>
<Navbar/> 
<Herosection/> 
<Posts/> 
</Box>
   
  );
}

export default App;
