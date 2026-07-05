const c = '/multiFiles/communityQr.html'
function replaceCommunity() {
    fetch(c)
        .then(response => response.text())
        .then(data => {
            document.getElementById('community').innerHTML = data;
        })
        .catch(error => console.error(error));
}
replaceCommunity();