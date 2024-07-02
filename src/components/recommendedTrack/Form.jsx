import { useEffect, useState } from 'react';
import '../../style/recommendedTrack/form.scss';

const Form = ({genres, setFetchOptions}) =>{

    //handle inputs changes
    const [inputsValues, setInputsValues] = useState({
        genre: '',
        valence: 0,
        speechiness: 0,
        energy: 0,
    });
    
    const handleInputChange = (e) =>{

        const name = e.target.name;
        const value = e.target.value;
        setInputsValues(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    //handle submit form
    const handleSubmit = (e) =>{
        e.preventDefault();
        setInputsValues({
            genre: '',
            valence: 0,
            speechiness: 0,
            energy: 0,
        });

        setMatchingGenres([]);

        let genre;

        if(genres.includes(inputsValues.genre)){
            genre = inputsValues.genre;
        }
        else{
            const randomGenreNumber = Math.floor(Math.random() * genres.length);
            genre = genres[randomGenreNumber];
        }

        const genresString = `&seed_genres=${genre}`;
        const energyString = `&target_energy=${inputsValues.energy/10}`;
        const speechinessString = `&target_speechinees=${inputsValues.speechiness/10}`;
        const valenceString = `&target_valence=${inputsValues.valence/10}`;
        

        const urlOptions = `limit=1&market=PL${inputsValues.genre ? genresString: ''}${inputsValues.energy !== 0 ? energyString : ''}${inputsValues.speechiness !== 0 ? speechinessString : ''}${inputsValues.valence !== 0 ? valenceString: ''}`;
        setFetchOptions(urlOptions);
    }

    //handle showing matching genres
    const [matchingGenres, setMatchingGenres] = useState([]);
    
    const handleGenreChange = (e) =>{
        const value = e.target.value;

        if(value.length >= 3){
            const tab = genres.filter(genre => genre.includes(value));
            setMatchingGenres(tab);
        }
        else{
            setMatchingGenres([]);
        }
    }

    const handleClickMatchingGenre = (genre) =>{
        setInputsValues(prevState =>({
            ...prevState,
            genre,
        }));
        setMatchingGenres([]);
    }
    
    return(
        <div className='recommendationForm'>
                <form onSubmit={handleSubmit}>
                    <div className="inputsWrap">
                        <div className='inputWrap' >
                            <h2>gatunek</h2>
                            <div className="genreInputWrap">
                                <input type='text' name='genre' value={inputsValues.genre} onChange={(e)=>{handleInputChange(e); handleGenreChange(e)}}/>
                                <div className='matchingGenresWrap'>
                                    {matchingGenres.map((genre, index) => ( <div key={index} onClick={()=>{handleClickMatchingGenre(genre)}} className="matchingGenre">{genre}</div> ))}
                                </div>
                            </div>
                        </div>
                        <div className='inputWrap numberValue' >
                            <h2>pozytywność</h2>
                            <input type='number' name='valence' min='0' max='10' value={inputsValues.valence} onChange={handleInputChange}/>
                        </div>
                        <div className='inputWrap numberValue' >
                                <h2>muzyczność</h2>
                            <input type='number' name='speechiness' min='0' max='10' value={inputsValues.speechiness} onChange={handleInputChange}/>
                        </div>
                        <div className='inputWrap numberValue' >
                            <h2>energia</h2>
                            <input type='number' name='energy' min='0' max='10' value={inputsValues.energy} onChange={handleInputChange}/>
                        </div>
                    </div>
                    <button>Szukaj</button>
                </form>
            </div>
    )
}

export default Form;