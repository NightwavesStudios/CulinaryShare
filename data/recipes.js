window.scroll(0, 50);
var recipes = [
  {
                name: "Salchi Papas",
                link: "/recipes/salchipapas",
                thumb: "salchipapas.jpg",
                votes: "Colombian Dish",
            },
            {
                name: "Grilled Cheese",
                link: "/recipes/grilledcheese",
                thumb: "../assets/images/GrilledCheese.png",
                votes: "Simple, Quick",
            },
            {
                name: "No-Bake Brownies",
                link: "/recipes/nobakeoreobrownies",
                thumb: "../assets/images/NoBakeOreoBrownies.png",
                votes: "No-Bake, Dessert",
            },
            {
                name: "Cinamon Oats",
                link: "/recipes/cinamonoats",
                thumb: "../assets/images/CinnamonOats.png",
                votes: "Breakfast, Quick",
            },
            {
                name: "Apple Butter",
                link: "/recipes/applebutter",
                thumb: "../assets/images/AppleButter.png",
                votes: "Spread",
            },
            {
                name: "Easy Crunchy Moist Brownies",
                link: "/recipes/easycrunchymoistbrownies",
                thumb: "../assets/images/easycrunchymoistbrownies.jpg",
                votes: "Baking, Dessert",
            },
   {
                name: "Energy Bites",
                link: "/recipes/energybites",
                thumb: "energybites.png",
                votes: "No Bake, Snacks",
            },
  {
                name: "Bean and Cheese Quesadilla",
                link: "/recipes/beanandcheesequesadilla",
                thumb: "beanandcheesequesadilla.png",
                votes: "Mexican",
            },
   {
                name: "Roasted Tomatoes",
                link: "/recipes/roastedtomatoes",
                thumb: "roastedtomatoes.html",
                votes: "Toppings, Appetizers",
            },
        ];
















        function runP() {
            document.getElementById('recipes').innerHTML = "";
            for (var i = 0; i < recipes.length; i++) {
                document.getElementById("recipes").innerHTML += `
                <div class="box">
                <a href="${recipes[i].link}"   style='margin:0;padding:0px !important;'>
                <div class="recipe">
                <img class="lazy" data-src='${recipes[i].thumb}'>
                <a class="title ft-link" href="${recipes[i].link}" >${recipes[i].name}</a>
                <br>
                <span>
                <i class="material-symbols-outlined">bookmark</i> ${recipes[i].votes}
                </span>
                </div>
                </a>
                </div>
                `;
            }
        }
        runP();
        
        
