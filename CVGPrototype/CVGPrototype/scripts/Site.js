
window.onscroll = function () {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("mainNav").classList.add("past-main")
    }
    else {
        document.getElementById("mainNav").classList.remove("past-main")
    }
}