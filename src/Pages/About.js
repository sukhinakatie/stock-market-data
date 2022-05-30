import {Flex, Box, Image, Header,Text, Container} from "@chakra-ui/react";
import React from "react";
import Navbar from '../Components/Navbar';


function About() {
  return (
    <div>
    
    <Flex
    wrap={"wrap"}
    
    minWidth='max-content'
    >
      <Box
      position={"fixed"}
      width={"100%"}
      height={"100%"}
      bgGradient={"linear(to-r, #1c0996, #bc00d9)"}
      
      >
      <Box
      
      mt={"15vh"}
      ml={"5vw"}
      display={"flex"}
      wrap={"wrap"}
      justifyContent={"flex-start"}
      
      >
        
        
       <Image width={'40vw'} src="/stocks.png" alt='Stock Picture' />
       <Container
       mt={"20vh"}>
       <Text ml={"4vw"} fontSize='30px' color='white' fontWeight={"bold"}>
        The Data Seek
        </Text>
        <Text ml={"4vw"} fontSize='20px' color='white' fontWeight={"light"}>
        The gretest tool to stay tuned with the latest stocks updates. Click 'Stocks' to start
        </Text>
        </Container>
      </Box>

      </Box>
    </Flex>
    
      <h1>About page</h1>
    </div>
  );
}

export default About;
