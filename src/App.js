import { Navbar, Herosection, Posts } from "./componets";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ backgroundColor: '#001E3C', minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: 0 ,margin: 0}}>
      <Navbar />
      <Box sx={{ flex: '1',}}>
        <Herosection />
        <Posts />
      </Box>
    </Box>
  );
}

export default App;

