var servings = document.getElementById("servings");
var cooktime = document.getElementById("cooktime");
var preptime = document.getElementById("preptime");
var ingredients = document.getElementById("ingredients");
var appliances = document.getElementById("appliances");
var prepinstructions = document.getElementById("prepinstructions");
var cookinstructions = document.getElementById("cookinstructions");
var videotutorial = document.getElementById("videotutorial");
var recipetitle = document.getElementById("recipetitle");
var image = document.getElementById("image");
function openRecipe(name) {
  if (name === "salchipapas") {
    image.style.backgroundImage = "url('salchipapas.jpg')";
    recipetitle.innerHTML = "Salchi Papas";
    servings.innerHTML = "Servings<br>4";
    cooktime.innerHTML = "Cook Time<br>10";
    preptime.innerHTML = "Prep Time<br>10";
    ingredients.innerHTML = "Ingredients:<br><br>8 hotdogs, 4 large peeled potatoes, vegetable oil for frying, salt, (optional) ketchup and mayo, water<br>";
    appliances.innerHTML = "Appliances:<br><br>Stove, (optional) grill, (if using stove) frying pan, big pot<br>";
    prepinstructions.innerHTML = "Prep Instructions:<br><br>Turn on grill to medium and stove to medium high<br>";
    cookinstructions.innerHTML = "Cook Instructions:<br><br>Step 1. Heat the oil in the big pot. Step 2. Cut the potatoes into rectangular prisms (whatever size you choose as long as it fits in your pan). Step 3. Drain and pat the potato strips dry and add to pot, cook for 8 minutes until golden brown. Step 4. When done, transfer potatoes with a slotted spoon to a plate, season with salt to your liking. Step 5. For grill: Put the hotdogs on the grill until each side is cooked equally, For stove: put the hotdogs on the frying pan and cook for 2 minutes in boiling water. Step 6. When done move hotdogs to a plate and cut them into 3 equal slices. Step 7: move to the plate with the fries (Optional) Step 8: To make salsa rosa mix mayo and ketchup together. Step 9: Share! Step 10: ENJOY!!!<br>";
    videotutorial.innerHTML = "<iframe allowFullScreen='true' id='videotutorial'src='https://www.youtube.com/embed/tgbNymZ7vqY'><a href=''>Video Link (Browser dosen't support embedding)</a></iframe>";
  } else if (name === "grilledcheese") {
 image.style.backgroundImage = "url(grilledcheese.jpg')";
   recipetitle.innerHTML = "Grilled Cheese";
    servings.innerHTML = "Servings<br>1";
    cooktime.innerHTML = "Cook Time<br>7";
    preptime.innerHTML = "Prep Time<br>5";
    ingredients.innerHTML = "Ingredients:<br><br>a bit of butter or mayonaise (Optional), 2 slices of bread, and 3 slices cheese<br>";
    appliances.innerHTML = "Appliances:<br><br>Pan and Stove<br>";
    prepinstructions.innerHTML = "Prep Instructions:<br><br>butter the bread or put mayo on the bread and put the cheese on the inside of the 2 slices <br>";
    cookinstructions.innerHTML = "Cook Instructions:<br><br>Toast your Grilled Cheese the stove until the cheese is gooey and the bread is a golden brown.<br>";
    videotutorial.innerHTML = "<iframe allowFullScreen='true' id='videotutorial'src='https://www.youtube.com/embed/tgbNymZ7vqY'><a href=''>Video Link (Browser dosen't support embedding)</a></iframe>";
  }


          document.getElementById("popup").style.animation = "fadeIn 1s";
          document.getElementById("popup").style.visibility = "visible";
          setTimeout(() => {
          window.scrollTo(0,0);
          }, 1000);
        }
        
        function closeRecipe() {
          document.getElementById("popup").style.animation = "fadeOut 1s";
          setTimeout(() => {
          document.getElementById("popup").style.visibility = "hidden";
          window.scrollTo(0,0);
          }, 1000);
        }
        //openRecipe("salchipapas");
