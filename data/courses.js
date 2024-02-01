window.scroll(0, 1);
var courses = [{
                name: "Making sourdough Bread",
                link: "courses/makingsourdoughbread",
                thumb: "../assets/images/sourdoughbread.png",
                category: "Baking",
            },
            {
                name: "Benefits of Gardening",
                link: "courses/benefitsofgardening",
                thumb: "../assets/images/gardening.png",
                category: "Gardening"
            },
            {
                name: "Immersion Blender Alt.",
                link: "courses/immersionblenderalternatives",
                thumb: "../assets/images/immersionblender.png",
                category: "Alternate Tricks"
            },
            {
                name: "How To Crack Eggs",
                link: "courses/howtocrackeggs",
                thumb: "../assets/images/howtocrackeggs.png",
                category: "Tips & Tricks"
            },
        ];

        function runCourses() {
            for (var i = 0; i < courses.length; i++) {
                document.getElementById("courses").innerHTML += `
                <a href=${courses[i].link}  style='margin:0;padding:0px !important;'>
                <div class="course">
                <img class="lazy" data-src='${courses[i].thumb}'>
                <a class="title ft-link" href=${courses[i].link} >${courses[i].name}</a>
                <br>
                <span>
                <i class="material-symbols-outlined">bookmark</i> ${courses[i].category}
                </span>
                </div>
                </a>
                `;
            }
        }
        runCourses();
