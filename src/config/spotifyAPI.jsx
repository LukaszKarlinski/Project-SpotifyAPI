import accessToken from "./apiKeys";


const authorization = {
    headers:{
        'Authorization': 'Bearer ' + accessToken,
    }
}

const setUrl = (type, value) =>{

    let url = '';
    const urlCore = 'https://api.spotify.com/v1/';

    if(type==='search'){
        url = `${urlCore}search?q=${value}&type=artist&market=PL&limit=1`;
    }
    else{
        url = `${urlCore}${type}/${value}`;
    }

    return url;
}

const fetchData = async (type, value) =>{

    const url = setUrl(type, value);

    try{
        const response = await fetch(url, authorization);

        if(response.ok){
            const data = await response.json();
            return data;
        }
        else{
            throw new Error(response.status);
        }
    }
    catch(error){
        console.error('Fetching data error', error);
    }
}

export default fetchData;