var games = [{
    name: "Essentials of Cooking 1",
    link: "javascript:(openLesson('essentialsofcooking1'));",
    thumb: "about.jpg",
    votes: "10/10",
},
{
    name: "Essentials of Cooking 2",
    link: "javascript:(openLesson('essentialsofcooking2'));",
    thumb: "about.jpg",
    votes: "10/10",
},
{
    name: "Essentials of Cooking 3",
    link: "javascript:(openLesson('essentialsofcooking3'));",
    thumb: "about.jpg",
    votes: "10/10"
},
{
    name: "Essentials of Cooking 4",
    link: "javascript:(openLesson('essentialsofcooking4'));",
    thumb: "about.jpg",
    votes: "10/10"
},
{
    name: "Baking 101",
    link: "javascript:(openLesson('baking101'));",
    thumb: "baking.jpeg",
    votes: "9/10"
},
{
  name: "How to Grow Your Own Food",
  link: "javascript:(openLesson('howtogrowyourownfood'));",
  thumb: "gardening.jpeg",
  votes: "7/10"
  
},
{
  name: "Grilling 101",
  link: "javascript:(openLesson('grilling101'));",
  thumb: "grilling.jpg",
  votes: "6/10"
  
},
{
  name: "Basics of Plating",
  link: "javascript:(openLesson('basicsofplating'));",
  thumb: "platingdish.jpg",
  votes: "6/10"
  
},
];

function runGames() {
for (var i = 0; i < games.length; i++) {
    document.getElementById("game").innerHTML += `
    <a href=${games[i].link}  style='margin:0;padding:0px !important;'>
    <div class="game">
    <img src='${games[i].thumb}'>
    <a class="title ft-link" href=${games[i].link} >${games[i].name}</a>
    <br>
    <span>
    <i class="material-symbols-outlined">thumb_up</i> ${games[i].votes}
    </span>
    </div>
    </a>
    `;
}
}
runGames();