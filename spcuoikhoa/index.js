const getAPI = async () => {
    const url = 'https://myanimelist.p.rapidapi.com/manga/top/all';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9e99ee419emshae7989b736b8c43p1ec912jsn1b77aa00c10d',
            'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        const content = document.querySelector('#body-content')
        let html = "";
        html += `  <div class="body-list">`


        for (let i = 0; i < result.members.length; i++) {
            let name = result.members[i].title
            let img = result.members[i].picture_url

            let information = result.members[i].type
            console.log(name, img, information)
            html += `                <div class="body-item">
             <img src=${img}
                 alt="">
             <p class="body-item-name">${name}</p>
       </div>`
        }
        html += `
    </div>`
        content.innerHTML = html
    } catch (error) {
        console.log(error);
    }
}
getAPI();
// } catch (error) {
//     console.error(error);
// }// const getAPI = async () => {
//     const url = 'https://myanimelist.p.rapidapi.com/anime/1535';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '9e99ee419emshae7989b736b8c43p1ec912jsn1b77aa00c10d',
//             'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//         //const content = document.querySelector('#body-content')
//         //let html = "";
//         //html += `  <div class="body-list">`


//         //for (let i = 0; i < result.characters.length; i++) {
//         // let name = result.characters[i].name
//         // let img = result.characters[i].picture_url

//         // let information = result.characters[i].information
//         // console.log(name, img, information)
//         //     html += `                <div class="body-item">
//         //     <img src=${img}
//         //         alt="">
//         //     <p class="body-item-name">${name}</p>
//         // </div>`
//         // }
//         // html += `
//         // </div>`
//         // content.innerHTML = html

//     } catch (error) {
//         console.error(error);
//     }