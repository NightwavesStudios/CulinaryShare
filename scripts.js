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
        //Parallax Scrolling Function (If Not SUpported)
        if (CSS.supports("background-attachment: fixed")) {} else {
          document.getElementsByClassName("bg-image").style.backgroundAttachment = "scroll";
        }
//Ad Blocker Script (GeeksForGeeks: https://www.geeksforgeeks.org/how-to-detect-adblocker-using-javascript
      /**   let fakeAd = document.createElement("div"); 
  fakeAd.className =  
  "textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox"
      
  fakeAd.style.height = "1px"
    
  document.body.appendChild(fakeAd) 
    
  let x_width = fakeAd.offsetHeight; 
  let msg = document.getElementById("msg") 
    

    if(x_width){ 
            
      console.log("Ad Blocker Detection Passed") 
    }else{ 
      window.location.href = "../adblock.html";
    } **/
/** Go Back Script **/
function goBack() {
history.back();
return;
}
        
