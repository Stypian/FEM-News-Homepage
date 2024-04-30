onload = function() {
    
    
    function openMenu() {
        const butt = document.querySelector(".news-home__nav-menu");
        const bod = document.body;
        const drop = document.querySelector(".news-home__mobile-drop");
        butt.addEventListener("click", function() {
            drop.setAttribute("style", "transform: scale(1);")
            bod.setAttribute("style", "height: 100%; overflow: hidden;");
        })
    }

    function closeMenu() {
        const close = document.querySelector(".news-home__close-nav");
        const bod = document.body;
        const drop = document.querySelector(".news-home__mobile-drop");
        close.addEventListener("click", function() {
            drop.setAttribute("style", "transform: scale(0);")
            bod.setAttribute("style", "height: auto; overflow: auto;");
        })
    }

    openMenu();
    closeMenu();

































}