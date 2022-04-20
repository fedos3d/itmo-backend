let before_loadtime = new Date().getTime();
window.onload = function () {
    let aftr_loadtime = new Date().getTime();
    let loadTime = (aftr_loadtime - before_loadtime) / 1000;
    document.querySelectorAll("div.mynav > a").forEach(function(el) {
        if (el.href === document.location.href) {
            el.style.color = "red";
            el.style.border = "solid";
        }
    })
    document.getElementById('time').textContent = "Load time client: " +   String(loadTime) + document.getElementById('time').textContent;
}