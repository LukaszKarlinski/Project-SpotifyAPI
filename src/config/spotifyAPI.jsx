import accessToken from "./apiKeys";


const authorization = {
    headers:{
        'Authorization': 'Bearer ' + accessToken,
    }
}

const setUrl = (type, value, options) =>{

    let url = '';
    const urlCore = 'https://api.spotify.com/v1/';

    if(type==='search'){
        url = `${urlCore}search?q=${value}&type=artist&market=PL&limit=1`;
    }
    else if(type==='recommendations' && value===' '){
        url = `${urlCore}${type}?${options}`;
    }
    else{
        if(!options)
            url = `${urlCore}${type}/${value}`;
        else
            url = `${urlCore}${type}/${value}/${options}`;
    }

    return url;
}

const fetchData = async (type, value, options='') =>{

    const url = setUrl(type, value, options);

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