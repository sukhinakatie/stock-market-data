import { Flex, Box, Link, HStack, Img} from "@chakra-ui/react";

 {/*TEST*/}
const Navbar = () => {
    return(
        <Flex
        flexDirection={"row"}
        flexWrap={"wrap"}
        flex={1}
        flexBasis={"400px"}
        >
            
            <Box
            pt={"0.9rem"}
            pl={"3rem"}           
            width={"100rem"}
            height={"4rem"}
            backgroundColor={"#1c007b"}
                >
                <HStack
                spacing={"2rem"}
                >
                   <Link
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
                   ><a href="/home">Home</a></Link>                   
                   <Link
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
                   ><a href="/stocks">Stocks</a></Link>
                   <Link
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
                   ><a href="/quote">Quote</a></Link>
                   <Box
                    position={"absolute"}  
                    right={"2rem"}               
                    >
                    <Link
                        variant={"outline"}
                        fontWeight={"bold"}
                        color={"white"}>
                            <a href="/home">DataSeek</a>
                    </Link>
                    </Box>
                </HStack>    
            </Box>
        </Flex>
    );
}

export default Navbar;