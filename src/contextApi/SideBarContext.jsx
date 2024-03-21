import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const MenuContext = createContext({})


const SideBarContext = ({ children }) => {

  const [activeTab, setActiveTab] = useState('newscred')
  const [toggleNav, setToggleNav] = useState(false)
  return (

    <MenuContext.Provider value={{
      activeTab,
      setActiveTab,
      toggleNav,
      setToggleNav

    }}>
      {children}
    </MenuContext.Provider>
  )
}
SideBarContext.PropTypes = {
  children: PropTypes.element,
}

export const MenuContextProvider = () => useContext(MenuContext);

export default SideBarContext;
