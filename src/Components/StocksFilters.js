import {Flex, Box, HStack, Button} from "@chakra-ui/react";

import './StocksFilters.css';

const StocksFilters = ({filterOptions, activeFilters, onFilterSelect}) => {
    const filterButtons = (filterOptions || []).map((option, index) =>
            <FilterButton
                key={index}
                text={option.text}
                isActive={activeFilters.includes(option.value)}
                onClick={() => onFilterSelect(option.value)}
            />
        )

    return (
        <Flex
            flexDirection={"row"}
            flexWrap={"wrap"}
        >
            <Box
                px={"3rem"}
                py={"0.9rem"}
                width={"100%"}
            >
                <HStack
                    flexWrap={"wrap"}
                    className="stocks-filters"
                >
                    <div><i>Sector</i> filters:</div>
                    {filterButtons.length ? filterButtons : <div>loading filters...</div>}
                </HStack>
            </Box>
        </Flex>
    );
}

function FilterButton({text, isActive, onClick}) {
    return <Button
        pl={"0.5rem"}
        pr={"0.5rem"}
        pt={"0.2rem"}
        pb={"0.2rem"}
        variant={isActive ? "solid" : "ghost"}
        bgColor={isActive ? "purple.400" : ""}
        _hover={{ bg: "purple.200" }}
        rounded={"0.5rem"}
        color={"black"}
        onClick={onClick}
    >{text}</Button>
}

export default StocksFilters;