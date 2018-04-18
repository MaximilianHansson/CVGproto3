
window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("mainNav").classList.add("past-main");
    }
    else {
        document.getElementById("mainNav").classList.remove("past-main");
    }
}

/*function hide() {

    var x = document.getElementById("hideDiv");
    if (x.style.visibility == "visible") {
        x.style.visibility = "hidden";
    }
    else {
        
        x.style.visibility = "visible";
    }
}*/