import { useEffect, useState } from 'react';
import '../../style/searchArtist/artistData.scss';
import Track from './Track';


const ArtistData = ({artistData, topTracks ,albums}) =>{

    const [followers, setFollowers] = useState('');

    const formatNumber = (number) =>{
        const reversed = number.split('').reverse().join('');
        const spaced = reversed.match(/.{1,3}/g).join(' ');
        const result = spaced.split('').reverse().join('');

        return result;
    }

    useEffect(()=>{
        if(artistData.followers){
            const followersString = artistData.followers.total.toString();
        const rightFormat = formatNumber(followersString);
        setFollowers(rightFormat);
        }
    },[artistData.name]);

    return(
        <>
        {artistData.name ? <article className="descriptionWrap">
            <div className="artistImgWrap">
                <h1 className='artistName'>{artistData.name}</h1>
                <img src={artistData.images[1].url} alt={artistData.name} />
                <h3 className='genres'>{`[${artistData.genres}]`}</h3>
                <div className='infoWrap'>
                    <h2 className='value'>{followers}</h2>
                    <h2>obserwujących</h2> 
                </div>
                <div className='linkWrap'>
                    <a href={artistData.external_urls.spotify} target='_blank'> Sprawdź profil artysty na spotify </a>
                </div>
            </div>
            <div className='artistDescriptionWrap'>
                <article className='topTracks'>
                    <h2 className='popularTracks'>Popularne utwory</h2>
                    {topTracks[0] ? topTracks.map((track, index) =>{
                        return(
                            <Track key={index} track={track}/>
                        )
                    }) : <div>failed to load tracks</div>}
                </article>
            </div>
        </article> : <p>. . .</p>}
        </>
            
    )
}

export default ArtistData;