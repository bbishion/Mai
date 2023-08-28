const url = 'https://myanimelist.p.rapidapi.com/anime/recommendations/1';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1677229fb9msh555db19db40db19p13b67ajsn75df7029ffb0',
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
getAPI();