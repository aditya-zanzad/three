import React from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react';
import {SunIcon, MoonIcon} from '@chakra-ui/icons';
const Lightdarkmode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <>
        <header >
          <IconButton onClick={toggleColorMode}top={4}
          right={4}
          pos={'fixed'} 
          colorScheme='purple'h={10}
          w={10}
          zIndex={'overlay'}
          >
            {colorMode==='light'? <SunIcon/>:<MoonIcon/>}
          </IconButton>
        </header>
      </>
    );
}

export default Lightdarkmode