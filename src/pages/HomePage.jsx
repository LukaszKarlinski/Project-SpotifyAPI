import { useEffect, useState } from 'react';
import '../style/homePage/homePage.scss';
import Header from '../components/homePage/Header'
import TopTracks from '../components/homePage/TopTracks';
import fetchData from '../config/spotifyAPI';

import Menu from '../components/Menu';

const HomePage = () =>{

    //chandle fetching tracks from playlist
    const fetchTracks = async (playlistId) =>{
        const data = await fetchData('playlists', playlistId);
        const allTracks = data.tracks.items;
        const tracks = allTracks.slice(0,10);
        const tracksInfo = tracks.map(x => x.track);
        return tracksInfo;
    }


    //fetch songs popular in Poland
    const [popularPolish, setPopularPolish] = useState([]);

    useEffect(()=>{
        const getPolishTracks = async () =>{
            const tracks = await fetchTracks('37i9dQZEVXbMZ5PAcNTDXd');
            setPopularPolish(tracks);
        }
        getPolishTracks();
    },[]);


    //fetch songs popular around the world
    const [popularWorld, setPopularWorld] = useState([]);

    useEffect(()=>{
        const getWorldTracks = async () =>{
            const tracks = await fetchTracks('37i9dQZEVXbMDoHDwVN2tF');
            setPopularWorld(tracks);
        }
        getWorldTracks();
    },[]);

    return(
        <div className='homePageWrap'>
            <Menu/>
            <Header/>
            <section className='popularSongs'>
                <div className='popularSongsTitleWrap'>
                    <h3 className='market'>Polska</h3>
                    <h3 className='description'>najpopularniejsze utwory tygodnia</h3>
                </div>
                <TopTracks tracks={popularPolish}/>
            </section>
            <section className='popularSongs'>
                <div className='popularSongsTitleWrap'>
                    <h3 className='market'>świat</h3>
                    <h3 className='description'>najpopularniejsze utwory tygodnia</h3>
                </div>
                <TopTracks tracks={popularWorld}/>
            </section>
        </div>
    )
}

export default HomePage;