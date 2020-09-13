
'use strict';



function getUserbyId(){
    
    let userId = document.getElementById("mySearch").value;
    console.log(userId);

    fetch(' https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=XXXXXXXXXXXXXXX&format=json&input_json={"steamid":'+ userId +'}', )
    .then(response => response.json())
    .then(responseJson => 
        displayResults(responseJson))
    .catch(error => alert('Could not find that user!'));

window.addEventListener('error', function(e) {            
//Create new error message
 e.target.parentNode.innerHTML = "Oh no! Could not find that user!";
}, true);
}

function watchForm (){
    $('form').submit(event => {
        event.preventDefault();
        getUserbyId();
    });
    }

    $(function() {
        console.log('App loaded! Waiting for submit!');
        watchForm();
      });
