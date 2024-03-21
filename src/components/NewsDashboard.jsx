import Newshub from "./Newshub"
import Guardian from "/src/components/Guardian"
import Newscred from "/src/components/Newscred"
import { MenuContextProvider } from "../contextApi/SideBarContext"


const NewsDashboard = () => {
    const { activeTab } = MenuContextProvider()

    return (
        <section className="w-full max-w-[82rem] h-screen">
            <div className="py-[1.25rem] md:pl-[1.88rem] md:pr-[2.25rem]  h-screen px-[1rem] w-full bg-[#F8F8F8]">

                {
                    activeTab === "newscred" && <Newscred />
                }
                {
                    activeTab === "guardian" && <Guardian />
                }

            </div>

        </section>
    )
}

export default NewsDashboard
