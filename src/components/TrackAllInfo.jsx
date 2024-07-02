import { IconRefresh } from '@tabler/icons-react';
import AudioPlayer from './AudioPlayer';
import '../style/trackAllInfo.scss';

const TrackAllInfo = ({track, genre, refresh}) =>{

    return(
        <article className="trackAllInfoWrap">
            {track.name ? <>
                <div className='trackAllWrap'>
                <div className='trackInfo'>
                    <h3 className='trackTitle'>{track.name}</h3>
                    {track.artists ? <div className='artists'>{track.artists.map((artist, index) => (<p key={index}>{artist.name}</p>))}</div> : <p>loading</p>}
                    <div className='genre'>{`[${genre}]`}</div>
                </div>
                <AudioPlayer url={track.preview_url}/>
            </div>
            <div className='creditsWrap'>
                <div className='credit'><a href={ track.name ? track.external_urls.spotify : ''} target='_blank'>sprawdź cały utwór</a></div>
                <div className="refresh" onClick={()=>{refresh()}}><IconRefresh/></div>
                <div className='credit'><a href={ track.name ? track.artists[0].external_urls.spotify : ''} target='_blank'>sprawdź profil artysty</a></div>
            </div>
            </> : <div className='noTrackWrap'>. . .</div>}
            
        </article>
    )
}

export default TrackAllInfo;