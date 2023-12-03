window.scroll(0, 1);
var recipes = [
  {
                name: "Salchi Papas",
                link: "/recipes/salchipapas.html",
                thumb: "salchipapas.jpg",
                votes: "Colombian Fast Food",
            },
            {
                name: "Grilled Cheese",
                link: "/recipes/grilledcheese.html",
                thumb: "grilledcheese.jpg",
                votes: "Zaxbys",
            },
            {
                name: "Popsicles",
                link: "javascript:(openRecipe('popsicles'));",
                thumb: "popsicles.jpg",
                votes: "4/10",
            },
            {
                name: "No-Bake Brownies",
                link: "javascript:(openRecipe('nobakebrownies'));",
                thumb: "nobakebrownies.jpg",
                votes: "7/10",
            },
            {
                name: "Cinamon Oats",
                link: "javascript:(openRecipe('cinamonoats'));",
                thumb: "cinamonoats.jpg",
                votes: "6/10",
            },
            {
                name: "Apple Butter",
                link: "javascript:(openRecipe('applebutter'));",
                thumb: "applebutter.jpg",
                votes: "6/10",
            },
            {
                name: "Chicken Nuggets",
                link: "javascript:(openRecipe('chickennuggets'));",
                thumb: "chickennuggets.jpg",
                votes: "Chick-Fil-A",
            },
            {
                name: "Bean and Cheese Quesadilla",
                link: "javascript:(openRecipe('beanandcheesequesadilla'));",
                thumb: "beanandcheesequesadilla.jpg",
                votes: "Moes Mexican Grill",
            },
            {
                name: "Tomato Sandwich",
                link: "javascript:(openRecipe('tomatosandwich'));",
                thumb: "tomatoesandwich.jpg",
                votes: "3/10",
            },
            {
                name: "Lasagna",
                link: "javascript:(openRecipe('lasagna'));",
                thumb: "lasagna.jpg",
                votes: "6/10",
            },
            {
                name: "Dirt & Worms",
                link: "javascript:(openRecipe('dirtandworms'));",
                thumb: "dirtandworm.jpg",
                votes: "GrubHub",
            },
            {
                name: "Pimento Cheese Sandwich",
                link: "javascript:(openRecipe('pimentocheesesandwich'));",
                thumb: "pimentocheesesandwich.jpg",
                votes: "6/10",
            },
            {
                name: "BLT",
                link: "javascript:(openRecipe('blt'));",
                thumb: "blt.jpg",
                votes: "Oak Grove Market",
            },
            {
                name: "Hot Dog",
                link: "javascript:(openRecipe('hotdog'));",
                thumb: "hotdog.jpg",
                votes: "3/10",
            },
            {
              name: "Eggs",
              link: "javascript:(openRecipe('eggs'));",
              thumb: "eggs.jpeg",
              votes: "6/10",
            },
            {
              name: "Chocolate Covered Crackers",
              link: "javascript:(openRecipe('chocolatecoveredritzcrackers'));",
              thumb: "chocolatecoveredritzcrackers.jpg",
              votes: "8/10",
            },
        ];
















        function runP() {
            document.getElementById('recipes').innerHTML = "";
            for (var i = 0; i < recipes.length; i++) {
                document.getElementById("recipes").innerHTML += `
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
                `;
            }
        }
        runP();
        
        
