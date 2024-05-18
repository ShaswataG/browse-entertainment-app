import { useState } from 'react'
import { useAnime } from '../pages/Home'

export default function AnimeItem(props) {
    const { animeArray } = useAnime()
    const [ expanded, setExpanded ] = useState(false)
    const test = animeArray.map(anime => {
        return (
            <h3>{anime.title}</h3>
        )
    })
    const item = animeArray.filter(anime => anime.ranking == props.id)
    // console.log(item[0])
    const genres = item[0].genres.map(genre => {
        return (
            <li>{genre}</li>
        )
    })
    console.log(genres)
    
    return (
        <div className='anime-item'>
            {/* {test} */}
            <h1>{item[0].title}</h1>
            <h3>Ranking: {item[0].ranking}</h3>
            <h3>Genres:</h3>
            <ul className='genres'>
                {genres}
            </ul>
            <img src={item[0].image} alt="anime representational image"/>
            <p className={expanded ? "synopsis-expanded synopsis" : 'synopsis-hidden synopsis'}>{item[0].synopsis}</p>
            <p onClick={() => { setExpanded(prevExpanded => {return !prevExpanded }) }}>{expanded ? "Read less" : "Read more"}</p>
        </div>
    )
}