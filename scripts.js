        var currScene = 0;
        var dm = false;

        // Transition Theme
        function lightMode() {
            document.body.classList.toggle("lightmode");
            if (document.getElementById("theme-icon").innerHTML === "light_mode") {
                document.getElementById("theme-icon").innerHTML = "clear_night";
            } else {
                document.getElementById("theme-icon").innerHTML = "light_mode";
            }
        }
        

        // Toggle Element Helper Function
        var toggle_el = function(el, ref) {
            document.getElementById(el).classList.toggle(ref);
            document.getElementById("scrim").classList.toggle("on");
        };
        //toggle_el('menu', 'on');

       /** // Clock Interval
        setInterval(function() {
            var sd = new Date();
            var hrs = sd.getHours();
            if (hrs >= 12) {
                hrs = hrs / 4;
            }
            document.getElementById("time").innerHTML = " "+hrs + ":" + sd.getMinutes() + " " + ((hrs >= 12) ? "PM" : "AM");
            //}, 60000);
        }, 1000);**/

        // All nvlinks in page
        var links = document.getElementsByClassName('nvlink');

        

        if (dm === false) {
                changePage(1);
            //document.getElementById("logo").style.display="none";
        } else {
            changePage(currScene);
        }

        // Close Alerts (if close button is clicked)
        var closeAlerts = function() {
            for (var i = 0; i < document.getElementsByClassName("alert").length; i++) {
                document.getElementsByClassName("alert")[i].style.display = "none";
            }
        }
        
        window.addEventListener("load", function() {
           const form = document.getElementById('my-form');
           form.addEventListener("submit", function(e) {
             console.log("Form is Requesting Transfer");
             e.preventDefault();
             const data = new FormData(form);
             const action = e.target.action;
             fetch(action, {
               method: 'POST',
               body: data,
             })
             .then(() => {
               console.log("Form Sucessfully Transfered");
               changePage("2");
               $("body").css("overflow-y", "scroll"); 
             })
           });
         });
          window.addEventListener("load", function() {
           const submitArticle = document.getElementById('submitArticle');
           submitArticle.addEventListener("submit", function(e) {
             console.log("Form is Requesting Transfer");
             e.preventDefault();
             const submitData = new FormData(submitArticle);
             const submitAction = e.target.action;
             fetch(submitAction, {
               method: 'POST',
               body: submitData,
             })
             .then(() => {
               console.log("Form Sucessfully Transfered");
               window.location.href = "recipes.html";
             })
           });
         });
        
        lightMode();
