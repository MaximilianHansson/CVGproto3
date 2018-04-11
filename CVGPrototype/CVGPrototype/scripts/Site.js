
window.onscroll = function () {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("mainNav").classList.add("past-main")
    }
    else {
        document.getElementById("mainNav").classList.remove("past-main")
    }
}