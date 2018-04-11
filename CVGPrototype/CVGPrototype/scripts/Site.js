
window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("mainNav").classList.add("past-main")
    }
    else {
        document.getElementById("mainNav").classList.remove("past-main")
    }
}