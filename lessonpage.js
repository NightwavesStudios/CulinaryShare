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
function openLesson(name) {
  if (name === "essentialsofcooking1") {
    image.style.backgroundImage = "url('salchipapas.jpg')";
    recipetitle.innerHTML = "Essentials of Cooking";
    servings.innerHTML = "Read Time<br>4 Min.";
    cooktime.innerHTML = "Difficulty<br>Easy";
    preptime.innerHTML = "Rating<br>10/10";
    ingredients.innerHTML = "Introduction:<br><br>Cooking is a hobby, a pashion, a skill, a necessity, and so many other things to people around the world. Whatever it is to you though, I will tell you one thing. You will not regret learning this simple, yet complex skill of turning a pile of raw ingredients, into a beautiful delicious and elegant meal.<br>";
    appliances.innerHTML = "Overview:<br><br>In this series of four lessons, you will be taught the absolute essentials of cooking.<br>";
    prepinstructions.innerHTML = "Lesson:<br><br>Content<br>";
    cookinstructions.innerHTML = "Epilouge:<br><br>Throughout this lesson, I hope that you have learned many things that you may bring into the kitchen next time you cook!<br><br>Until next time,<br>-CulinaryShare<br>";
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