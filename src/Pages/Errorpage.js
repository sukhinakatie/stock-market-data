import { Flex, Box, Container } from "@chakra-ui/react";
import React from "react";
function ErrorPage() {
  return (
    
           <Flex>
               <Box
               position={"absolute"}
               width={"100vw"}
               height={"100vh"}
               bgGradient={"linear(to-r, #1c0996, #bc00d9)"}>
                   <Box
                   mt={"4rem"}
                   textAlign={"center"}
                    minWidth={"min-content"}
                    flexShrink={"2"}
                    color={"purple.200"}
                    fontSize={"8rem"}
                   >404 NOT FOUND</Box>
                   <Container
                   textAlign={"center"}
                   textColor={"purple.100"}
                   >Ooops...Such a scary phrase! No worries, just something went wrong. What if you misclicked?</Container>
               </Box>
           </Flex>
    
  );
}

export default ErrorPage;