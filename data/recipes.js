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
                name: "Cinnamon Oats",
                link: "/recipes/cinnamonoats",
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
                thumb: "../assets/images/energybites.png",
                votes: "No Bake, Snacks",
            },
  {
                name: "Bean and Cheese Quesadilla",
                link: "/recipes/beanandcheesequesadilla",
                thumb: "../assets/images/beanandcheesequesadilla.png",
                votes: "Mexican",
            },
   {
                name: "Roasted Tomatoes",
                link: "/recipes/roastedtomatoes",
                thumb: "../assets/images/bakedtomatoes.png",
                votes: "Toppings, Appetizers",
            },
   {
                name: "Classic Croutons",
                link: "/recipes/classiccroutons",
                thumb: "../assets/images/classiccroutons.png",
                votes: "Snack, Salad Topping",
            },
  {
                name: "Raspberry Refresher",
                link: "/recipes/raspberrylemonaderefresher",
                thumb: "../assets/images/raspberrylemonaderefresher.png",
                votes: "Dunkin Copycat, Drink",
            },
  {
                name: "Fried Eggs",
                link: "/recipes/friedeggs",
                thumb: "../assets/images/friedeggs.png",
                votes: "Eggs, Breakfast",
            },
  {
                name: "Pimento Cheese Sandwich",
                link: "/recipes/pimentocheesesandwich",
                thumb: "../assets/images/pimentocheesesandwich.png",
                votes: "Sandwich, Breakfast",
            },
  {
                name: "BLT Sandwich",
                link: "/recipes/bltsandwich",
                thumb: "../assets/images/bltsandwich.png",
                votes: "Sandwich, Lunch",
            },
        ];
/**  {
                name: "",
                link: "/recipes/",
                thumb: "../assets/images/.png",
                votes: "",
            }, **/
















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
        
        
