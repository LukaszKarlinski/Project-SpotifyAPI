import { useState } from 'react';
import '../../style/searchArtist/inputSearchArtist.scss';
import fetchData from '../../config/spotifyAPI';

const InputSearchArtist = ({setArtistData}) =>{

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = await fetchData('search', inputValue);
        setArtistData(data.artists.items[0]);
        setInputValue('');
    }

    return(
        <div className='wrapSearchArtist'>
            <h1>Znajdź artystę</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className='artistSearchInput' value={inputValue} onChange={handleInputChange}/>
            </form>
        </div>
    )
}

export default InputSearchArtist;