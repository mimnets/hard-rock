document.getElementById('lyrics-button').addEventListener('click', function(){
    const lyricsInput = document.getElementById('lyrics-input').value;
    let lyricsSearch = lyricsInput;
    fetch(`https://api.lyrics.ovh/suggest/${lyricsSearch}`)
    .then(res => res.json())
    .then(lyricsData => {
        for(let i = 0; i < 10; i++){
            const element = lyricsData.data[i];
            console.log(element);
            const lyricTitle = element.album.title;
            const lyricArtist = element.artist.name;
            console.log(lyricTitle + " - " + lyricArtist);
            fetch(`https://api.lyrics.ovh/v1/${lyricArtist}/${lyricTitle}`)
            .then(res => res.json())
            .then(lyrics => {
                console.log(lyrics);
                const lyricssubmit = "";
                lyricssubmit = document.getElementById('lyrics-list').innerText;

                fsdfj 
                
            })
        }
    })
})

// const lyricArtist = lyricItem.data;
// console.log(lyricArtist);

//     function getSuggestion(search){
//         fetch(`https://api.lyrics.ovh/suggest/${search}`)
//         .then(res => res.json())
//         .then(lyricsData => {
//         // console.log(lyricsData);
//         const test = lyricsData.bata;
//         // const test2 = test;
//         console.log(test);
//         })
//     }
//         // getSuggestion('love');

//         var request = new XMLHttpRequest();

// request.open('GET', 'https://api.lyrics.ovh/v1/artist/title');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

// request.send();