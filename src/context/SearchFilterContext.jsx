import React, { createContext, useState } from "react";
export const SearchFilterContext = createContext("");

function SearchFilterProvider({ children }) {
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [inpValue, setInpValue] = useState("")
  // const [showModal, setShowModal] = useState(false)


  function showContentFilter() {
    setShowFilter(!showFilter);
      setShowSearch(false);
  }
  function showContentShow() {
    setShowSearch(!showSearch);
        setShowFilter(false);
  }
  function setImpTargetValue(x) {
    setInpValue(x)
    console.log(inpValue);
    
  }
  
  return (
    <SearchFilterContext.Provider value={{ showFilter, showSearch,showContentFilter,showContentShow ,setImpTargetValue,inpValue}}>
      {children}
    </SearchFilterContext.Provider>
  );
}

export default SearchFilterProvider;
