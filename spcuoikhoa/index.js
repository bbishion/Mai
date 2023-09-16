const getAPI = async () => {
    const url = 'https://myanimelist.p.rapidapi.com/anime/1535';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '663d4dfc19msh9863da2cdbfe9f8p1bc40ejsn841044d3d8d0',
            'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getAPI();