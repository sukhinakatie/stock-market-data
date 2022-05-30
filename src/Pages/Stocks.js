import React, {useState} from "react";
import StocksTable from "../Components/StocksTable";
import StocksFilters from "../Components/StocksFilters";
import { Box } from "@chakra-ui/react";

function Stocks() {
    const [filterOptions, setFilterOptions] = useState([]);
    const [activeFilters, setActiveFilters] = useState([]);

    function onFilterSelect(value) {
        if (activeFilters.includes(value)) {
            const index = activeFilters.indexOf(value)
            setActiveFilters([...activeFilters.slice(0, index), ...activeFilters.slice(index + 1)])
        } else {
            setActiveFilters([...activeFilters, value])
        }
    }

    return (
      <div
          id="stocksPage"
          style={{height: '100%'}}
      >
    
        <StocksFilters
            filterOptions={filterOptions}
            activeFilters={activeFilters}
            onFilterSelect={onFilterSelect}
        />
        <StocksTable
            activeFilters={activeFilters}
            setFilterOptions={setFilterOptions}
            style={{flexGrow: 1}}
        />
    
      </div>
  );
}

export default Stocks;