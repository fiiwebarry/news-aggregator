import { guardianApi } from '/src/components/axios-Api/Axios'
import { MenuContextProvider } from '/src/contextApi/SideBarContext'
import { useEffect } from 'react'


// https://content.guardianapis.com/search?api-key=583de15d-29de-4ff8-89a3-ef7e8f767693



const Guardian = () => {
    const { isLoading, setIsLoading, newsHub, setNewsHub } = MenuContextProvider()
    useEffect(() => {
        const getGuardianNews = async () => {
            try {
                setIsLoading(true);
                const response = await guardianApi.get("/search?api-key=583de15d-29de-4ff8-89a3-ef7e8f767693");

                if (response.status === 200) {
                    setNewsHub(response.data);

                    console.log(response.data);
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


            </div>) : (<div>
                {newsHub && (newsHub.map((data) => {
                    const { id, type, sectionId, sectionName, webTitle, webUrl } = data;
                    return (
                        <div key={id}>
                            <ul>
                                <li>{type}</li>
                                <li>{sectionId}</li>
                                <li>{sectionName}</li>
                                <li>{webTitle}</li>
                                <li>{webUrl}</li>
                            </ul>
                        </div>
                    );
                })

                )}
            </div>
            )}
        </section>
    )
}

export default Guardian
