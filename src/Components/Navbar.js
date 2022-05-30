import {Flex, Box, HStack, Button, Image} from "@chakra-ui/react";
import {Link} from "react-router-dom";


 {/*TEST*/}
const Navbar = () => {
    return(
        <Flex
        flexDirection={"row"}
        flexWrap={"wrap"}
        >

            <Box
            pt={"0.9rem"}
            pl={"3rem"}
            width={"100%"}
            height={"4rem"}
            backgroundColor={"#1c007b"}
                >
                <HStack
                spacing={"2rem"}
                >
                   <Button
                   pl={"0.5rem"}
                   pr={"0.5rem"}
                   pt={"0.2rem"}
                   pb={"0.2rem"}
                   variant={"outline"}
                   bgColor={"transparent"}
                   _hover={{ bg: "purple.500" }}
                   textColor={"White"}
                   opacity={"100%"}
                   border={"2px"}
                   borderColor={"purple.500"}
                   rounded={"0.5rem"}
                   >
                       <Link to="/home">Home</Link>
                   </Button>
                   <Button
                   pl={"0.5rem"}
                   pr={"0.5rem"}
                   pt={"0.2rem"}
                   pb={"0.2rem"}
                   variant={"outline"}
                   bgColor={"transparent"}
                   _hover={{ bg: "purple.500" }}
                   textColor={"White"}
                   opacity={"100%"}
                   border={"2px"}
                   borderColor={"purple.500"}
                   rounded={"0.5rem"}
                   >
                       <Link to="/stocks">Stocks</Link>
                   </Button>
                   {/*<Button
                   pl={"0.5rem"}
                   pr={"0.5rem"}
                   pt={"0.2rem"}
                   pb={"0.2rem"}
                   variant={"outline"}
                   bgColor={"transparent"}
                   _hover={{ bg: "purple.500" }}
                   textColor={"White"}
                   opacity={"100%"}
                   border={"2px"}
                   borderColor={"purple.500"}
                   rounded={"0.5rem"}
                   >
                       <Link to="/quote">Quote</Link>
                   </Button>*/}
                   <Box
                    position={"absolute"}
                    right={"2rem"}
                    >
                    <Button
                        variant={"outline"}
                        fontWeight={"bold"}
                        color={"white"}
                    >
                        <Link to="/home">DataSeek</Link>
                    </Button>
                    </Box>
                </HStack>
            </Box>
        </Flex>
    );
}

export default Navbar;