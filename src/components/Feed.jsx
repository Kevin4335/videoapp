import {useState, useEffect} from 'react';
import { Box,Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import {SideBar , Videos} from './';

const Feed = () => {

  

  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
  }, []);

  return (
    <Stack sx = {{flexDirection:{sx:"column", md:"row"}}}>
      <Box sx = {{height: {sx:'auto', md:'92vh'}, borderRight:'3px solid #2C1E74', px:{sx:0,md:2}}}>
        <SideBar />
        <Typography className="copyright" variant="body2" sx={{mt:1.5,color:'#2C1E74'}}>
          KevTube
        </Typography>
      </Box >
      
      <Box p={2} sx= {{overflow: 'auto', height:'90vh',flex:2 }}>
        <Typography variant = 'h4' fontWeight = 'bold' mb= '2' sx={{color: '#C23A73'}}>
          New <span style={{color: '#2C1E74'}}>
            videos
          </span>
        </Typography>
        <Videos videos={[]}/>
      </Box>
    </Stack>
  )
}

export default Feed