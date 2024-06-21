import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import { Box, Container, Heading, Img, Stack, keyframes } from '@chakra-ui/react';
import home2 from '../assets/home2.jpg';
import { Text } from '@chakra-ui/react';
import home1 from '../assets/home1.jpg';
import home3 from '../assets/home3.png';
import gaming1 from '../assets/gaming1.jpg';
import gaming2 from '../assets/gaming2.jpg';
import gaming3 from '../assets/gaming3.jpg';
import slide5 from '../assets/slide5.jpg';
import Typewriter from '../Animation.jsx/Typewriter';
import '../index.css';
const spin = keyframes`
  from {transform: rotate(0deg);}   
  to {transform: rotate(360deg)} 
`;

const Home = () => {
  const spinAnimation = `${spin} infinite 6s linear`; 

  return (
    <>
      <Box w="100%" h={{ base: '80vh', md: '100vh' }} overflow="hidden" className='example'>
        <CCarousel transition='crossfade' controls indicators>
          <CCarouselItem>
            <Box w="100%" h={{ base: '80vh', md: '100vh' }} >
              <CImage className="d-block w-100 h-100 object-fit-cover" src={slide5} alt="slide 1" opacity={0.4} />
             
            </Box>
          </CCarouselItem>
          <CCarouselItem>
            <Box w="100%" h={{ base: '80vh', md: '100vh' }}>
              <CImage className="d-block w-100 h-100 object-fit-cover" src={gaming1} alt="slide 2" />
              <Heading color="white" className="position-absolute top-50 start-50 translate-middle" fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }} opacity={0.8}>
                <Typewriter text="Welcome to the virtual world of Gaming" delay={100} infinite/>
              </Heading>
            </Box>
          </CCarouselItem>
          <CCarouselItem>
            <Box w="100%" h={{ base: '80vh', md: '100vh' }}>
              <CImage className="d-block w-100 h-100 object-fit-cover" src={gaming2} alt="slide 3" />
              <Heading color="white" className="position-absolute top-50 start-50 translate-middle" fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }} opacity={0.8}>
              <Typewriter text="with 4k Ultra HD Quality of Gaming videos" delay={100} infinite/>
              </Heading>
            </Box>
          </CCarouselItem>
        </CCarousel>
      </Box>
      <Container maxW="container.xl" minH="100vh" p={16}>
        <Heading
          textAlign="center"
          py={2}
          textTransform="uppercase"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          w="fit-content"
          borderBottom="2px solid"
          borderColor="gray.200"
          margin="auto"
        >
          Services
        </Heading>
        <Box >
          <Stack
            h="full"
            p={{ base: 2, md: 8 }}
            alignItems="center"
            direction={{ base: "column", md: "row" }}
            spacing={8}
          >
            <Box animation={spinAnimation} borderRadius="full" overflow="hidden" w={['200px', '37%']} h={['200px', '400px']} >
              <Img src={home3} w="100%" h="100%" borderRadius="full" />
            </Box>
            <Text letterSpacing="wider" lineHeight="tall" p={[2, 16]} textAlign={{ base: "center", md: "left" }} w={['100%','62%']}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde omnis temporibus, consectetur tempora sequi molestias esse iure tempore exercitationem aliquam placeat repudiandae quod. Quas asperiores aspernatur, temporibus perspiciatis perferendis magnam nemo similique reprehenderit nostrum quasi rerum explicabo eius .
            </Text>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default Home;
