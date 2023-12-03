var lessons = [{
                name: "Essentials of Cooking 1",
                link: "lessons/essentials-of-cooking-1",
                thumb: "about.jpg",
                votes: "10/10",
            },
            {
                name: "Essentials of Cooking 2",
                link: "lessons/essentials-of-cooking-2",
                thumb: "about.jpg",
                votes: "10/10",
            },
            {
                name: "Essentials of Cooking 3",
                link: "lessons/essentials-of-cooking-3",
                thumb: "about.jpg",
                votes: "10/10"
            },
            {
                name: "Essentials of Cooking 4",
                link: "lessons/essential-sof-cooking-4",
                thumb: "about.jpg",
                votes: "10/10"
            },
            {
                name: "Baking 101",
                link: "lessons/baking-101",
                thumb: "baking.jpeg",
                votes: "9/10"
            },
            {
              name: "How to Grow Your Own Food",
              link: "lessons/how-to-grow-your-own-food",
              thumb: "gardening.jpeg",
              votes: "7/10"
              
            },
            {
              name: "Grilling 101",
              link: "lessons/grilling-101",
              thumb: "grilling.jpg",
              votes: "6/10"
              
            },
            {
              name: "Basics of Plating",
              link: "lessons/basics-of-plating",
              thumb: "platingdish.jpg",
              votes: "6/10"
              
            },
        ];

        function runLessons() {
            for (var i = 0; i < lessons.length; i++) {
                document.getElementById("lessons").innerHTML += `
                <a href=${lessons[i].link}  style='margin:0;padding:0px !important;'>
                <div class="lesson">
                <img data-src='${lessons[i].thumb}'>
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
