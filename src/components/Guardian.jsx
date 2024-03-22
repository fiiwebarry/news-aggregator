import { guardianApi } from '/src/components/axios-Api/Axios'
import { MenuContextProvider } from '/src/contextApi/SideBarContext'
import { useEffect } from 'react'


const Guardian = () => {
    const { isLoading, setIsLoading, newsHub, setNewsHub } = MenuContextProvider()
    useEffect(() => {
        const getGuardianNews = async () => {
            try {
                setIsLoading(true);
                const response = await guardianApi.get("/search?api-key=583de15d-29de-4ff8-89a3-ef7e8f767693");

                if (response.status === 200) {
                    setNewsHub(response.data.response.results);

                    console.log(newsHub);
                    setIsLoading(false);

                }
            } catch (error) {
                console.error('Error:', error);
                setIsLoading(false);
            }
        };

        getGuardianNews();
    }, []);





    return (
        <section>
            <p className=''>New Feeds</p>
            <input type='text'
                placeholder='search'
                autoComplete='off'

            />

            {isLoading ? (<div><h2>.........isLoading</h2>


            </div>) : (<div className='flex flex-wrap gap-7  '>
                {newsHub.map((data) => {
                    const { id, type, sectionId, sectionName, webTitle, webUrl } = data;
                    return (
                        <div className='w-[289px] flex  rounded-md flex-row shadow-md bg-[white] text-[black]' key={id}>
                            <div>
                                <p>{type}</p>
                                <p>{sectionId}</p>
                                <p>{sectionName}</p>
                                <p>{webTitle}</p>
                                <p>{webUrl}</p>
                            </div>
                        </div>
                    );
                })

                }
            </div>
            )}
        </section>
    )
}

export default Guardian
