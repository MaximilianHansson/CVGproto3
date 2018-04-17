window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("mainNav").classList.add("past-main");
        document.getElementById("to_top_button").style.visibility = "visible";
        
    }
    else {
        document.getElementById("mainNav").classList.remove("past-main");
        document.getElementById("to_top_button").style.visibility = "hidden";
        
    }
}

function scrollToEle(eleName) {
    var element = document.getElementById(eleName);
    scrollTo(0, element.offsetTop - 100);
}

function scrollToTop() {
    window.scrollTo(0, 0)
}