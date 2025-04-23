import { Box } from "@mui/material";
import Image from "next/image";

export default function Preloader() {
    return (
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100vh' }}>
        <Image width={300} height={300} src="/newlogo.svg" alt="Logo"  priority  />
      </Box>
    );
  }
  