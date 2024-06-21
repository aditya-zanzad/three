import React from 'react'
import { Container, HStack, VStack,Button,Input } from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
const Uploadvideo = () => {
  return (
    <Container maxW="container.xl" h="100vh"
    p="16" > 
     <VStack color="purple.500" h="full" justify="center" >
      <AiOutlineCloudUpload size={"10vmax"}/>
      <form>
        <HStack>
          <Input type="file" p={1} css={{"&::file-selector-button": {cursor: "pointer",
            border: "none",
            width: "50%",
            height: "100%",
            color: "purple",
            backgroundColor: "transparent",
            textAlign: "center",
            fontSize: "20px",

          }}} />
          <Button type="submit" color>Upload</Button>
        </HStack>
      </form>
     </VStack>
    </Container>
  )
}

export default Uploadvideo
