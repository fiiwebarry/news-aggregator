import { RiGlobalFill } from "react-icons/ri";
import { FaHamburger } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { MenuContextProvider } from "../../contextApi/SideBarContext";


const Header = () => {
    const { toggleNav, setToggleNav } = MenuContextProvider()

    return (

        <header>
            <nav className="bg-[fff] shadow-md">
                <div className="flex gap-[660px] p-5">
                    <div className="flex">
                        <p>Menu</p>
                        <span onClick={() => setToggleNav(false)}><FaHamburger /></span>



                    </div>
                    <div className="flex justify-center ">
                        <h1 className="">NewsHub</h1>
                        <span><RiGlobalFill /></span>
                    </div>

                </div>


            </nav>

        </header>
    )
}

export default Header
