import '../../style/homePage/reccomendation.scss';
import fetchData from '../../config/spotifyAPI';
import AudioPlayer from '../AudioPlayer';
import TrackAllInfo from '../TrackAllInfo';
import { useEffect, useState } from 'react';


const Reccomendation = () =>{


    //getting random genre

    const [genres, setGenres] = useState([]);
    const [chosenGenre, setChosenGenre] = useState('');

    const getGenres = async () =>{
        const data = await fetchData('recommendations', 'available-genre-seeds');
        setGenres(data.genres);
    }

    const randomGenre = () =>{
        const chosenGenreIndex = Math.floor(Math.random() * genres.length);
        const genre = genres[chosenGenreIndex];
        setChosenGenre(genre);
    }
    
    useEffect(() =>{
        randomGenre();
    },[genres]);
    
    useEffect(()=>{
        getGenres();
    },[]);



    //getting random track
    const [track, setTrack] = useState({});

    const getTrack = async () =>{
        if(chosenGenre){
            const data = await fetchData('recommendations', ' ', `limit=1&market=PL&seed_genres=${chosenGenre}`);
            setTrack(data.tracks[0]);
        }
    }

    useEffect(()=>{
       getTrack();
    },[chosenGenre]);
    
    

    return(
        <>
            {track ? <section className="reccWrap">
            <div className='titleWrap'>
                <h3>proponowany utwór</h3>
            </div>
            <TrackAllInfo track={track} genre={chosenGenre} refresh={randomGenre}/>
        </section> : <div><p>loading</p></div>}
        </>
        
    )
}

export default Reccomendation;