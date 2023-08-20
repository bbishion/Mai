var url = "https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true"

function getAPICovid19() {
    var promise = fetch(url);
    promise.then(function (response) {
        var json_promiso = response.json()
        return json_promiso
    }).then(data => {
        const totalCase = data.infected
        const totalDeaths = data.died
        console.log(totalDeaths)
        const newCasePerDay = data.infectedToday


        document.getElementById("total_case").innerHTML = totalCase
        document.getElementById("total_case").style.color = 'red'
        document.getElementById("total_deaths").innerHTML = totalDeaths
        document.getElementById("total_deaths").style.color = 'brown'
        document.getElementById("new_case").innerHTML = newCasePerDay
        document.getElementById("new_case").style.color = 'blue'
    })
}
setInterval(getAPICovid19, 1000)