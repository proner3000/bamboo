const a = '/multiFiles/nav.html'
function replaceheaderContent() {
    fetch(a)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error(error));
}
replaceheaderContent();

const b = '/multiFiles/footer.html'
function replaceContent() {
    fetch(b)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error(error));
}
replaceContent();

function setFavicon(url) {
    let link = document.querySelector("link[rel~='icon']");
    
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    
    link.href = url; 
    link.type = 'image/png';
}

setFavicon('/photos/bamboograss.png');