let pokeBtnGif = document.getElementById("poke-btn-gif")

pokeBtnGif.onclick = function () {
    let request = new XMLHttpRequest();

    request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=DwIUav0spoC6ragXjOACCY6g8sNp8hxO&tag=pokemon&rating=g');

    request.onload = function () {
        let response = request.response;
        let parsedData = JSON.parse(response);
        let originalUrl = parsedData.data.images.original.url;
        let gif = document.createElement('img');
        const gifs = document.querySelector("#gifs");
        const div = document.createElement("div");
        div.className = "gif"
        gif.setAttribute('src', originalUrl);
        div.appendChild(gif);
        borrarGif()
        gifs.appendChild(div);
    }

    request.oneerror = function () {
        console.log("There seems to be a problem!");
    }

    request.send();

}

function borrarGif() {
    const $gifs = document.querySelectorAll(".gif")
    for (let i = 0; i < $gifs.length; i++) {
        $gifs[i].remove()
    }
    event.preventDefault();
}