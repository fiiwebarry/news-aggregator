import { createContext, useContext, useState } from "react";
import propTypes from "prop-types";

const MenuContext = createContext({})


const SideBarContext = ({ children }) => {

  const [activeTab, setActiveTab] = useState('newscred')
  const [toggleNav, setToggleNav] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [newsHub, setNewsHub] = useState([])
  const [searchkeyword, setSearchKeyword] = useState('');
  const [filterdate, setFilterDate] = useState('');
  const [filtercategory, setFilterCategory] = useState('');
  const [filtersource, setFilterSource] = useState('');


  return (

    <MenuContext.Provider value={{

      activeTab,
      setActiveTab,
      toggleNav,
      setToggleNav,
      isLoading,
      setIsLoading,
      newsHub,
      setNewsHub,
      searchkeyword,
      setSearchKeyword,
      filterdate,
      setFilterDate,
      filtersource,
      setFilterSource,
      filtercategory,
      setFilterCategory,
    }}>
      {children}
    </MenuContext.Provider>
  )
}
SideBarContext.propTypes = {
  children: propTypes.element,
}

export const MenuContextProvider = () => useContext(MenuContext);

export default SideBarContext;
