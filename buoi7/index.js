function myAlert(message, type) {

    document.querySelector("#alert").innerHTML = `
    <div class="alert alert-${type} alert1 fade show" role="alert">
${message}
</div> `
}