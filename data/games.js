window.scroll(0,1);
var contact = [
    {
    name: "King of Steak",
    link: "/contact/kingofsteak/",
    thumb: "about.jpg",
    category: "Reaction Time",
},
{
    name: "Carrot Clicker",
    link: "javascript:(openLesson('essentialsofcooking2'));",
    thumb: "/contact/carrotclicker",
    category: "Clicker",
},
];

function runContact() {
for (var i = 0; i < contact.length; i++) {
    document.getElementById("contact").innerHTML += `
    <a href=${contact[i].link}  style='margin:0;padding:0px !important;'>
    <div class="lesson">
    <img class="lazy" data-src='${contact[i].thumb}'>
    <a class="title ft-link" href=${contact[i].link} >${contact[i].name}</a>
    <br>
    <span>
    <i class="material-symbols-outlined">thumb_up</i> ${contact[i].category}
    </span>
    </div>
    </a>
    `;
}
}
runContact();
