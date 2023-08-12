import { useState, useEffect } from 'react';
import { Box,Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import {SideBar , Videos} from './';

const Feed = () => {

  const[selectedCategory, setSelectedCategory] = useState('New');
  const[videos,setVideos] = useState([]);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx = {{flexDirection:{sx:"column", md:"row"}}}>
      <Box sx = {{height: {sx:'auto', md:'92vh'}, borderRight:'3px solid #2C1E74', px:{sx:0,md:2}}}>
        <SideBar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        
        />
        <Typography className="copyright" variant="body2" sx={{mt:1.5,color:'#2C1E74'}}>
          KevTube
        </Typography>
      </Box >
      
      <Box p={2} sx= {{overflow: 'auto', height:'90vh',flex:2 }}>
        <Typography variant = 'h4' fontWeight = 'bold' mb= '2' sx={{color: '#C23A73'}}>
          {selectedCategory} <span style={{color: '#2C1E74'}}>
            <span>
              videos
            </span>
          </span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed