import {Flex, Box} from "@chakra-ui/react";
import React from "react";
import Navbar from '../Components/Navbar';

function About() {
  return (
    <div>
    
    <Flex
    
    minWidth='max-content'
    >
    
      <Box
      position={"absolute"}
      width={"100vw"}
      height={"100vh"}
      bgGradient={"linear(to-r, #1c0996, #bc00d9)"}
      ></Box>
    </Flex>
    
      <h1>About page</h1>
    </div>
  );
}

export default About;
