import '../style/recommendedTrack/recommendedTrack.scss';
import { IconInfoCircle } from '@tabler/icons-react';
import Menu from '../components/Menu';
import Form from '../components/recommendedTrack/Form';
import TrackAllInfo from '../components/TrackAllInfo';
import fetchData from '../config/spotifyAPI';
import { useEffect, useState } from 'react';


const RecommendedTrackPage = () =>{

    //getting all genres
    const [genres, setGenres] = useState([]);

    useState(() =>{
        const getAllGenres = async () =>{
            const data = await fetchData('recommendations', 'available-genre-seeds');
            setGenres(data.genres);
        }

        getAllGenres();
    },[]);

    //handle showing info popup
    const [showInfo, setShowInfo] = useState(false);

    //getting recommend track
    const [track, setTrack] = useState({});
    const [trackGenre, setTrackGenre] = useState('');
    const [fetchOptions, setFetchOptions] = useState('');


    const fetchRecommendedTrack = async () =>{
        const data = await fetchData('recommendations', ' ', fetchOptions);
        setTrack(data.tracks[0]);
        setTrackGenre(data.seeds[0].id);
    }

    useEffect(() =>{
        if(fetchOptions){
            fetchRecommendedTrack();
        }
    },[fetchOptions])

    return(
        <section className='recommendedPageWrap'>
            <Menu/>
            <div className='titleWrap'>
                <h1 className='recommendedPageTitle'>Poznaj nowe utwory</h1>
                <div className='settingsTitleWrap'>
                    <h2> Wybierz preferowane ustawienia utworu</h2>
                    <div className="iconWrap" >
                        <IconInfoCircle onMouseOver={() =>{setShowInfo(true)}} onMouseLeave={()=>{setShowInfo(false)}} onTouchStart={()=>{setShowInfo(true)}} onTouchEnd={()=>{setShowInfo(false)}}/>
                    </div>
                </div>
                {showInfo && <div className='infoWrap'>
                        <div className="infoContent">
                            <div><p><span className='bold'>Gatunek</span> - gatunek z którego będzie wybierany rekomendowany utwór. Pusta lub błędna wartość oznacza losowy wybór gatunku.</p></div>
                            <div><p><span className='bold'>Pozytywność</span> - określa czy utwór ma być wesoły czy smutny. Przyjmuje wartości od 1 do 10, gdzie 10 oznacza bardzo pozytywny utwór, a 1 bardzo smutny. Wartość 0 oznacza pominięcie tego parametru.</p></div>
                            <div><p><span className='bold'>Muzyczność</span> - określa czy słowa w utworze są bardziej mówione czy śpiewane. Przyjmuje wartości od 1 do 10, gdzie 10 oznacza słowa bardziej śpiewane, a 1 bardziej mówione. Wartość 0 oznacza pominięcie tego parametru. </p></div>
                            <div><p><span className='bold'>Energia</span> - określa energiczność utworu. Przyjmuje wartości od 1 do 10, gdzie 10 oznacza wysoką energię, a 1 niską energię. Wartość 0 oznacza pominięcie tego parametru.</p></div>
                        </div>
                </div>}
            </div>
            <Form genres={genres} setFetchOptions={setFetchOptions}/>
            <TrackAllInfo track={track} genre={trackGenre} refresh={fetchRecommendedTrack}/>
            
        </section>
    )
}

export default RecommendedTrackPage;