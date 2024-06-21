import React from 'react';
import { Box, Container, Flex, Text, Link, Stack, IconButton, VStack, HStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaTwitch, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      bg="purple.500"
      py={10}
    >
      <Container maxW="container.xl">
        <Stack spacing={8}>
          <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }}>
            <Box>
              <Text fontSize="2xl" fontWeight="bold">Gaming World</Text>
              <Text fontSize="sm">© 2024 Gaming World. All rights reserved.</Text>
            </Box>
            <HStack spacing={4} >
              <Link href="#" isExternal>
                <IconButton
                  variant="outline"
                  colorScheme="whiteAlpha"
                  aria-label="Facebook"
                  icon={<FaFacebook />}
                />
              </Link>
              <Link href="#" isExternal>
                <IconButton
                  variant="outline"
                  colorScheme="whiteAlpha"
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                />
              </Link>
              <Link href="#" isExternal>
                <IconButton
                  variant="outline"
                  colorScheme="whiteAlpha"
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                />
              </Link>
              <Link href="#" isExternal>
                <IconButton
                  variant="outline"
                  colorScheme="whiteAlpha"
                  aria-label="Twitch"
                  icon={<FaTwitch />}
                />
              </Link>
              <Link href="#" isExternal>
                <IconButton
                  variant="outline"
                  colorScheme="whiteAlpha"
                  aria-label="Discord"
                  icon={<FaDiscord />}
                />
              </Link>
            </HStack>
          </Flex>
          <Flex justify="space-between" direction={{ base: 'column', md: 'row' }}>
            <VStack align="start">
              <Link href="/about" color="gray.400">About Us</Link>
              <Link href="/contact" color="gray.400">Contact</Link>
              <Link href="/privacy" color="gray.400">Privacy Policy</Link>
              <Link href="/terms" color="gray.400">Terms of Service</Link>
            </VStack>
            <VStack align="start">
              <Link href="/careers" color="gray.400">Careers</Link>
              <Link href="/support" color="gray.400">Support</Link>
              <Link href="/faq" color="gray.400">FAQ</Link>
            </VStack>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
