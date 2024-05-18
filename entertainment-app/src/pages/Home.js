import { useContext, createContext, useEffect, useState } from 'react'
import axios from 'axios'
import AnimeItem from '../components/AnimeItem'

const UserContext = createContext()

export default function Home() {
    const url = "https://anime-db.p.rapidapi.com/anime"
    const [animeArray, setAnimeArray] = useState([])
    const [animeCollection, setAnimeCollection] = useState([])
    const [fetchSuccess, setFetchSuccess] = useState(false)

    const getAll = async () => {
        try {
            const response = await axios.get(url, {
                headers: {
                    'X-RapidAPI-Key': 'f82d2cc6cemsh9ecd903739e6733p1aee05jsnc1e6737215b4',
                    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
                },
                params: {
                    page: '1',
                    size: '10',
                }
            })
            setFetchSuccess(true)
            // console.log(response.data.data)
            setAnimeArray(response.data.data)
        } catch(err) {
            setFetchSuccess(false)
        }
    }

    useEffect(() => {
        getAll()
    }, [])

    useEffect(() => {
        setAnimeCollection(prevAnimeCollection => {
            return animeArray.map(anime => {
                return <AnimeItem key={anime.ranking} id={anime.ranking} />
            })
        })
    }, [animeArray])

    return (
        <UserContext.Provider value={{ animeArray }}>
            {/* {<AnimeItem />} */}
            <div>
                {
                    fetchSuccess ?
                    <div className='anime-collection-container'>
                        { animeCollection}
                    </div>
                    :
                    <h1>Couldn't load data</h1>
                }
            </div>
        </UserContext.Provider>
    )
}

export const useAnime = () => {
    return useContext(UserContext)
}