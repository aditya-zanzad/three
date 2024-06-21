import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';

const Videos = () => {
  const videoArr = [
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBikes.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
  ];

  const [videoSrc, setVideoSrc] = useState(videoArr[0]);
  const [videoDetails, setVideoDetails] = useState({ title: 'Sample Video 1', description: 'This is a sample video for testing and demo. This is called description. Description.' });

  const fetchVideoDetails = async (videoId) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyDzEqMgxcgJmqOJ3tazCRfe_Ofb8pZjDzg&part=snippet,contentDetails,statistics,status`);
      const videoData = response.data.items[0].snippet;
      setVideoDetails({
        title: videoData.title,
        description: videoData.description,
      });
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };

  useEffect(() => {
    // Example video ID, you might want to change this based on the video being selected
    fetchVideoDetails('7lCDEYXw3mM');
  }, []);

  const handleVideoChange = (videoSrc, videoId) => {
    setVideoSrc(videoSrc);
    fetchVideoDetails(videoId);
  };

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'} p={2}>
        <video
          controls
          controlsList='nodownload'
          src={videoSrc}
          style={{ width: '100%', borderRadius: '20px' }}
        ></video>
        <VStack alignItems={'flex-start'} p={8} w={'full'} overflowY={'auto'} scrollBehavior={"smooth"}>
          <Heading>{videoDetails.title}</Heading>
          <Text>
            {videoDetails.description}
          </Text>
        </VStack>
      </VStack>
      <VStack w={['full', 'xl']} alignItems={'stretch'} p={8} spacing={8} overflow={'auto'} scrollBehavior={"smooth"}>
        {
          videoArr.map((item, index) => (
            <Button key={index} variant={'ghost'} colorScheme='purple' onClick={() => handleVideoChange(item, '7lCDEYXw3mM')}>
              Lecture {index + 1}
            </Button>
          ))
        }
      </VStack>
    </Stack>
  );
};

export default Videos;
