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
        
        