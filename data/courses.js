window.scroll(0, 1);
var courses = [
    {
                name: "Complete Guide To Eggs",
                link: "../courses/completeguidetoeggs",
                thumb: "/assets/images/completeguidetoeggs.png",
                skilllevel: "Beginner",
            },
            {
                name: "Start A Garden",
                link: "../courses/startagarden",
                thumb: "../assets/images/startagarden.png",
                skilllevel: "Beginner",
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
                <i class="material-symbols-outlined">bookmark</i> ${courses[i].skilllevel}
                </span>
                </div>
                </a>
                `;
            }
        }
        runCourses();
