window.scroll(0, 1);
var lessons = [{
                name: "Essentials of Cooking 1",
                link: "lessons/essentialsofcooking1",
                thumb: "../recipes.jpg",
                votes: "Essentials",
            },
            {
                name: "Benefits of Gardening",
                link: "lessons/benefitsofgardening",
                thumb: "../assets/images/gardening.png",
                votes: "Gardening"
            },
          
        ];

        function runLessons() {
            for (var i = 0; i < lessons.length; i++) {
                document.getElementById("lessons").innerHTML += `
                <a href=${lessons[i].link}  style='margin:0;padding:0px !important;'>
                <div class="lesson">
                <img class="lazy" data-src='${lessons[i].thumb}'>
                <a class="title ft-link" href=${lessons[i].link} >${lessons[i].name}</a>
                <br>
                <span>
                <i class="material-symbols-outlined">bookmark</i> ${lessons[i].votes}
                </span>
                </div>
                </a>
                `;
            }
        }
        runLessons();
