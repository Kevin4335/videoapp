import React from 'react';
import { Link } from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia} from '@mui/material'
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({video:{id:{videoId}, snippet}}) => {
  return (
    <Card sx={{width:{md:'320px',xs:'100%'}}}>
      <Link to = {videoId ?  `/video/${videoId}` : demoVideoUrl}>
        <CardMedia      
          image = {snippet?.thumbnails?.high?.url}
          alt = {snippet?.title}
          sx = {{width:358, height:180}}
          />
      </Link>
      <CardContent sx = {{backgroundColor:'#D58863', heigh:'106px'}}>
        <Link to = {videoId ?  `/video/${videoId}` : demoVideoUrl}>
          <Typography variant = "subtitle1" fontWeight="bold" color = "#DAD3AF">
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link to = {snippet?.channelId ?  `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant = "subtitle1" fontWeight="bold" color = "#C23A73">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:12, color:'#C23A73', ml:'5'}}/>

          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard