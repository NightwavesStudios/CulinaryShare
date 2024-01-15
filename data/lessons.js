window.scroll(0, 1);
var lessons = [{
                name: "Making sourdough Bread",
                link: "lessons/essentialsofcooking1",
                thumb: "../assets/images/sourdoughbread.jpg",
                votes: "Baking",
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
