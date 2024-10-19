window.onload = function() {
    lastmonth = 200 
    thismonth = 100 
    var arrow = document.getElementById("arrow")
    if (lastmonth < thismonth) {
        arrow.classList.replace("fa-sort-down", "fa-sort-up");
        arrow.style.color = "#6ed15c";
    } 
    else if (lastmonth == thismonth) {
        arrow.classList.replace("fa-sort-down", "fa-minus")
        arrow.style.color = "#e6d76a";
        arrow.classList.remove('fa-bounce');
    }
    else{
        arrow.style.color = "rgb(255, 100, 100)";
    }

    
  };


var icons = document.getElementsByClassName("infoIcon")

window.setTimeout(function () {
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.remove('fa-bounce');
      }
    
  }, 2000);