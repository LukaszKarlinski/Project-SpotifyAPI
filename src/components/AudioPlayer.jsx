import { useEffect, useRef, useState } from 'react';
import '../style/audioPlayer.scss';

import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { IconPlayerPauseFilled } from '@tabler/icons-react';

const AudioPlayer = ({url}) =>{

    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    const handleAudio = () =>{
        setIsPlaying(!isPlaying);
        audioRef.current.volume = 0.1;

        if(!isPlaying)
            audioRef.current.play();
        else
            audioRef.current.pause();
    }

    const [audioProgress, setAudioProgress] = useState('0%');

    const calculateProgress = () =>{
        const max = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;

        const progress = (currentTime/max) * 100;
        setAudioProgress(`${progress}%`);
    }

    useEffect(() => {
        let animationFrameId;
        
        const updateProgress = () => {
            calculateProgress();
            animationFrameId = requestAnimationFrame(updateProgress);
        };

        if (isPlaying) {
            animationFrameId = requestAnimationFrame(updateProgress);
        } else {
            cancelAnimationFrame(animationFrameId);
        }

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPlaying]);

    return(
        <div className='audioPlayerWrap'>
            <audio ref={audioRef}>
                    {url ? <source  src={url} type='audio/mpeg'/> :<p>brak podlądu utworu</p>}
                </audio>

                <div className='progressContainer'>
                    <div className='progress' style={{width: audioProgress}}></div>
                </div>
                <div className="controls">
                    <button onClick={handleAudio}>{isPlaying? <div className="iconWrap"><IconPlayerPauseFilled size={40}/></div>: <div className="iconWrap"><IconPlayerPlayFilled size={40}/></div> }</button>
                </div>
        </div>
    )
}

export default AudioPlayer