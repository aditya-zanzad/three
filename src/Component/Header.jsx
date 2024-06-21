import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button
        pos={"fixed"}
        top={4}
        left={4}
        colorScheme="purple"
        h={10}
        w={10}
        p={0}
        borderRadius={"full"}
        onClick={onOpen}
        zIndex={"overlay"}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={"ghost"}
                fontSize={"20"}
              >
                <Link to={"/"}>home</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={"ghost"}
                fontSize={"20"}
              >
                <Link to={"/videos"}>videos</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={"ghost"}
                fontSize={"20"}
              >
                <Link to={"/freevideos"}>free videos</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={"ghost"}
                fontSize={"20"}
              >
                <Link to={"/uploadvideos"}>upload video</Link>
              </Button>
            </VStack>
            <HStack pos={"fixed"} bottom={10}>
              <Button onClick={onClose} colorScheme="purple">
                <Link to={"/login"}>Login In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={"outline"}
              >
                <Link to={"/signup"}>Sign up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;
