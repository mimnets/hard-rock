document.getElementById('lyrics-button').addEventListener('click', function(){
    const lyricsInput = document.getElementById('lyrics-input').value;
    let lyricsSearch = lyricsInput;
    fetch(`https://api.lyrics.ovh/suggest/${lyricsSearch}`)
    .then(res => res.json())
    .then(lyricsData => {
        for(let i = 0; i < 10; i++){
            const element = lyricsData.data[i];
            // console.log(element);
            const lyricTitle = element.title;
            const lyricArtist = element.artist.name;

            const lyricList = document.getElementById('lyrics-list');
            lyricList.innerHTML = '';
            lyricList.innerHTML += `<p class="author lead"><strong>${lyricTitle}</strong> - Album by - <span>${lyricArtist}</span> <button class="btn btn-success">Get Lyrics</button></p>`;
            
            fetch(`https://api.lyrics.ovh/v1/${lyricArtist}/${lyricTitle}`)
            .then(res => res.json())
            .then(lyrics => {                
                return lyrics;         
            })
        }
    })
})