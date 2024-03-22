import { newsApi } from '/src/components/axios-Api/Axios'
import { MenuContextProvider } from '/src/contextApi/SideBarContext'
import { useEffect } from 'react'

// 2e5472ecb66d48f89d693af0420c25ea
// https://newsapi.org/v2/everything?q=tesla&from=2024-02-20&sortBy=publishedAt&apiKey=2e5472ecb66d48f89d693af0420c25ea

import React from 'react'

const Newshub = () => {

    const { isLoading, setIsLoading, newsHub, setNewsHub, filterdate, setFilterDate, searchkeyword, setSearchKeyword, filtersource, setFilterSource, filtercategory, setFilterCategory } = MenuContextProvider()

    useEffect(() => {
        const getNewsApi = async () => {
            try {
                setIsLoading(true);
                const response = await newsApi.get("/v2/everything", {
                    params: {
                        q: searchkeyword,
                        from: filterdate,
                        category: filtercategory,
                        sources: filtersource,
                        sortBy: 'publishedAt',
                        apiKey: '2e5472ecb66d48f89d693af0420c25ea'
                    }

                });

                if (response.status === 200) {
                    setNewsHub(response.data.articles);

                    console.log(newsHub);
                    setIsLoading(false);

                }
            } catch (error) {
                console.error('Error:', error);
                setIsLoading(false);
            }
        };

        getNewsApi();
    }, [searchkeyword, filterdate, filtercategory, filtersource]);




    return (
        <section>
            <p className=''>New Feeds</p>
            <input
                type='text'
                placeholder='Search keyword'
                autoComplete='off'
                value={searchkeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <input
                type='date'
                value={filterdate}
                onChange={(e) => setFilterDate(e.target.value)}
            />
            <input
                type='text'
                placeholder='Category'
                autoComplete='off'
                value={filtercategory}
                onChange={(e) => setFilterCategory(e.target.value)}
            />
            <input
                type='text'
                placeholder='Source'
                autoComplete='off'
                value={filtersource}
                onChange={(e) => setFilterSource(e.target.value)}
            />
            {isLoading ? (<div><h2>.........isLoading</h2>


            </div>) : (<div className='flex flex-wrap gap-7  '>
                {newsHub.map((data) => {

                    const { id, title, description } = data
                    return (<div className='w-[289px] flex  rounded-md flex-row shadow-md bg-[white] text-[black]' key={id}>
                        <div>
                            <p>{title}</p>
                            <p>{description}</p>








                        </div>
                    </div>)


                        ;
                })

                }
            </div>
            )}

        </section>
    )
}

export default Newshub
