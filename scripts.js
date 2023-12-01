        // Toggle Element Helper Function
        var toggle_el = function(el, ref) {
            document.getElementById(el).classList.toggle(ref);
            document.getElementById("scrim").classList.toggle("on");
        };

        // All nvlinks in page
        var links = document.getElementsByClassName('nvlink');

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