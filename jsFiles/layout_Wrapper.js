const a = 'multiFiles/nav.html'
function replaceheaderContent() {
    fetch(a)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error(error));
}
replaceheaderContent();

const b = 'multiFiles/footer.html'
function replaceContent() {
    fetch(b)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error(error));
}
replaceContent();