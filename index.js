
const Order = document.getElementById('OrderC')

window.addEventListener("scroll", function() {
    const bg = document.getElementById('BgMirror');

    if (window.scrollY > 50) {
        bg.classList.add("glass");
    } else {
        bg.classList.remove("glass");
    }
});