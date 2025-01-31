const searchInput = document.getElementById('search-input');
const artistResult = document.getElementById ('result-artist')
const playlistResult = document.getElementById('result-playlists')

function requestApi (searchTerm){
    const url = `http://localhost:3000/artists?name_like${searchTerm}`
    fetch(url)  
        .then ((response) => response.json ())
        .then ((result)   =>  displayResult(result))
}
function displayResult (result){
    playlistResult.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImg = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImg.src = element.urlImg;
        
    });
    artistResult.classList.remove('hidden');
}
document.addEventListener('input',()=>{
    const searchTerm = searchInput.value.toLowerCase(); 
    if (searchTerm === ''){
        playlistResult.classList.add('hidden');
        artistResult.classList.remove();
        return;
    }
    requestApi(searchTerm);
})
