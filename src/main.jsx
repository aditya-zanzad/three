import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App.jsx';
import theme from './Component/theme.js';
import './index.css';
import Lightdarkmode from './Component/Lightdarkmode.jsx';
import Footer from './Component/Footer.jsx';

const Root = () => {
  return (
    <React.StrictMode className="example">
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Lightdarkmode borderRadius={20}/>
          <App />
          <Footer/>
      </ChakraProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
