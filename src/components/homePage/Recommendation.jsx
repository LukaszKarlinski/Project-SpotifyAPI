import '../../style/homePage/reccomendation.scss';
import fetchData from '../../config/spotifyAPI';
import AudioPlayer from '../AudioPlayer';
import { IconRefresh } from '@tabler/icons-react';
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

    const [trackPreview, setTrackPreview] = useState('');

    const getTrack = async () =>{
        console.log('fetch',`limit=1&market=PL&seed_genres=${chosenGenre}`);
        const data = await fetchData('recommendations', ' ', `limit=1&market=PL&seed_genres=${chosenGenre}`);
        setTrack(data.tracks[0]);
        setTrackPreview(data.tracks[0].preview_url);
        console.log(data.tracks[0]);
        console.log('preview',data.tracks[0].preview_url);

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
            <div className='trackAllWrap'>
                <div className='trackInfo'>
                    <h3 className='trackTitle'>{track.name}</h3>
                    {track.artists ? <div className='artists'>{track.artists.map((artist, index) => (<p key={index}>{artist.name}</p>))}</div> : <p>loading</p>}
                    <div className='genre'>{`[${chosenGenre}]`}</div>
                </div>
                <AudioPlayer url={trackPreview}/>
            </div>
            <div className='creditsWrap'>
                <div className='credit'><a href={ track.name ? track.external_urls.spotify : ''} target='_blank'>sprawdź cały utwór</a></div>
                <div className="refresh" onClick={randomGenre}><IconRefresh/></div>
                <div className='credit'><a href={ track.name ? track.artists[0].external_urls.spotify : ''} target='_blank'>sprawdź profil artysty</a></div>
            </div>
            
        </section> : <div><p>loading</p></div>}
        </>
        
    )
}

export default Reccomendation;