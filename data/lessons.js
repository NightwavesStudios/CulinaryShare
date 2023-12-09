window.scroll(0, 1);
var lessons = [{
                name: "Essentials of Cooking 1",
                link: "lessons/essentials-of-cooking-1",
                thumb: "about.jpg",
                votes: "10/10",
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
                <i class="material-symbols-outlined">thumb_up</i> ${lessons[i].votes}
                </span>
                </div>
                </a>
                `;
            }
        }
        runLessons();
