import '../../style/homePage/topTracks.scss';

const TopTracks = ({tracks}) =>{

    return(
        <>
        {tracks[0] ? <div className="topTracksWrap">
            <div className='top3Wrap'>

                <div className='track top1'>

                    <div className='trackPositionWrap'>
                        <h3 className='trackPosition'>1</h3>
                    </div>
                    <div className='imgWrap'>
                        <img src={tracks[0].album.images[1].url} alt="" />
                    </div>
                    
                    <div className='trackInfo'>
                        <h4 className='trackName'>{tracks[0].name}</h4>
                        <div className='artistsWrap'>
                            {tracks[0].artists.map((artist, index) => (<p key={index}>{artist.name}</p>))}  
                        </div>
                    </div>

                </div>
                <div className='track top2'>

                    <div className='trackPositionWrap'>
                        <h3 className='trackPosition'>2</h3>
                    </div>

                    <div className='imgWrap'>
                        <img src={tracks[1].album.images[1].url} alt="" />
                    </div>

                    <div className='trackInfo'>
                        <h4 className='trackName'>{tracks[1].name}</h4>
                        <div className='artistsWrap'>
                            {tracks[1].artists.map((artist, index) => (<p key={index}>{artist.name}</p>))}  
                        </div>
                    </div>

                </div>


                <div className='track top3'>

                    <div className='trackPositionWrap'>
                        <h3 className='trackPosition'>3</h3>
                    </div>

                    <div className='imgWrap'>
                        <img src={tracks[2].album.images[1].url} alt="" />
                    </div>

                    <div className='trackInfo'>
                        <h4 className='trackName'>{tracks[2].name}</h4>
                        <div className='artistsWrap'>
                            {tracks[2].artists.map((artist, index) => (<p key={index}>{artist.name}</p>))}  
                        </div>
                    </div>

                </div>

            </div>
            <div className='restTracks'>
                {tracks.map((track,index) => {
                    if(index>2){
                        return(
                            <div key={index} className='track'>
                                <div className='trackPositionWrap'><h3 className='trackPosition'>{index+1}</h3></div>
                                <div className="imgWrap">
                                    <img src={track.album.images[2].url} alt="" />
                                </div>
                                <div className='trackInfo'>
                                    <h4 className='trackName'>{track.name}</h4>
                                    <div className="artistsWrap">
                                        {track.artists.map((artist,index) =>(<p key={index}>{artist.name}</p>))}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div> : <p>loading</p>}
        </>
        
    )
}

export default TopTracks;