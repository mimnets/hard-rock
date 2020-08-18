document.getElementById('lyrics-button').addEventListener('click', function(){
    const lyricsInput = document.getElementById('lyrics-input').value;
    const lyricApi = `https://api.lyrics.ovh/suggest/${lyricsInput}`;
    fetch(lyricApi)
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i < 10; i++){
            const element = data.data[i];
            const lyricList = document.getElementById('lyrics-list');
            lyricList.innerHTML += 
            `
            <div class="single-result row align-items-center my-3 p-3">
                <div class="col-md-9">
                    <h3 class="lyrics-name">${element.title}</h3>
                    <p class="author lead">Album by <span>${element.artist.name}</span></p>
                </div>
                <div class="col-md-3 text-md-right text-center">
                    <button onclick = "lyricsLink('${element.artist.name}','${element.title}')" class="btn btn-success">Get Lyrics</button>
                </div>
            `;
        }
    })
})

function lyricsLink(artist,title){
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then(res => res.json())
        .then(lyrics => {                
        console.log(lyrics);
        document.getElementById('lyrics-list').style.display = "none";
        const lyricsView = document.getElementById('lyrics-view');
            lyricsView.innerHTML += 
            `
                <button class="btn go-back">&lsaquo;</button>
                <h2 class="text-success mb-4">${title} - ${artist}</h2>
                <pre class="lyric text-white">${lyrics.lyrics}
                </pre>
            `;
    })
}