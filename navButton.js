function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    var y = document.getElementById("navButton");
    if (y.className === "fa fa-bars") {
        y.className += "fa fa-close";
    } else {
        y.className = "fa fa-bars";
    }
}
