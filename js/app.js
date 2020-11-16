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


    //Copy to Clipboard

    function copyToClip() {
        /* Get the text field */
        var copyText = document.getElementById("urlfield");
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert( "Link copiado! Agora, é só colar onde quiser. Envie para um amigo ou poste em suas redes sociais.");
      } 