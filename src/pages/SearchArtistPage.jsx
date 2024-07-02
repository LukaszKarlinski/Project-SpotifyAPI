import { useEffect, useState } from 'react';
import '../style/searchArtist/searchArtistPage.scss';
import InputSearchArtist from '../components/searchArtist/InputSearchArtist';
import ArtistData from '../components/searchArtist/ArtistData';
import fetchData from '../config/spotifyAPI';
import Menu from '../components/Menu';

const SearchArtistPage = () =>{

    const [artistData, setArtistData] = useState({});


    //get artist top tracks
    const [topTracks, setTopTracks] = useState({});

    useEffect(()=>{
        const fetchTracks = async () =>{
            const data = await fetchData('artists', artistData.id, 'top-tracks?market=PL&limit=5');
            setTopTracks(data.tracks);
        }
        if(artistData.id)
            fetchTracks();
    },[artistData])
    
    //get artist albums
    const [albums, setAlbums] = useState({});
    
    useEffect(()=>{
        const fetchAlbums = async () =>{
            const data = await fetchData('artists', artistData.id, 'albums?include_groups=album&market=PL');
            setAlbums(data.items);
        
        }
        
        if(artistData.id)
            fetchAlbums();
    },[artistData]);


    return(
        <section className="wrapSearchArtistPage">
            <Menu/>
            <InputSearchArtist setArtistData={setArtistData}/>
            <ArtistData artistData={artistData} albums={albums} topTracks={topTracks}/>
        </section>
    )
}

export default SearchArtistPage;