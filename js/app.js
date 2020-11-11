//Window Listener

    const topBar = document.querySelector('.attached-header');
    
    var myScrollFunc = function () {
        var topScroll = window.scrollY;
        if (topScroll >= 600) {
            topBar.classList.remove('hidden');
        } else {
            topBar.classList.add('hidden');
        }
    };
    
    window.addEventListener("scroll", myScrollFunc);
