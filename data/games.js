var games = [
    {
    name: "King of Steak",
    link: "/games/kingofsteak/",
    thumb: "about.jpg",
    category: "Reaction Time",
},
{
    name: "Carrot Clicker",
    link: "javascript:(openLesson('essentialsofcooking2'));",
    thumb: "/games/carrotclicker",
    category: "Clicker",
},
];

function runGames() {
for (var i = 0; i < games.length; i++) {
    document.getElementById("games").innerHTML += `
    <a href=${games[i].link}  style='margin:0;padding:0px !important;'>
    <div class="game">
    <img src='${games[i].thumb}'>
    <a class="title ft-link" href=${games[i].link} >${games[i].name}</a>
    <br>
    <span>
    <i class="material-symbols-outlined">thumb_up</i> ${games[i].category}
    </span>
    </div>
    </a>
    `;
}
}
runGames();
