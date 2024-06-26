import { useEffect, useState } from 'react';
import '../../style/searchArtist/track.scss';

const Track = ({track}) =>{

    const [allArtists, setAllArtists] = useState('');

    useEffect(()=>{
        let artists = '';
        track.artists.forEach(x =>{
            artists = artists + ' ' + x.name;
        });

        setAllArtists(artists);
    },[track.artists]);

    return(
        <div className='trackWrap'>
            <img src={track.album.images[2].url} alt="" />
            <div className="trackInfoWrap">
                <h1>{track.name}</h1>
                <p>{allArtists}</p>
            </div>
        </div>
    )
}

export default Track;