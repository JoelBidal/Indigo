/* BOTON IR ARRIBA*/

$(document).ready(function(){

    $('.container-header, header').click(function(){
        $('body, html').animate({
        scrollTop: '0px'
        }, 700);
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 0 ){
            $('.container-header, header').slideDown(500); 

        } else {
            $('.container-header, header').slideUp(500);
        }
    });
});


 // GALERIA DE IMAGENES

 document.addEventListener('DOMContentLoaded', () => {
    const imgLightBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(imgLightBox, {
        inDuration: 500,
        outDuration: 500,
    });
}); 

// CONTACTO

if (!('boxShadow' in document.body.style)) {
    document.body.setAttribute('class', 'noBoxShadow');
}

document.body.addEventListener("click", function(e) {
    var target = e.target;
    if (target.tagName === "INPUT" &&
        target.getAttribute('class').indexOf('liga') === -1) {
        target.select();
    }
});

(function() {
    var fontSize = document.getElementById('fontSize'),
        testDrive = document.getElementById('testDrive'),
        testText = document.getElementById('testText');
    function updateTest() {
        testDrive.innerHTML = testText.value || String.fromCharCode(160);
        if (window.icomoonLiga) {
            window.icomoonLiga(testDrive);
        }
    }
    function updateSize() {
        testDrive.style.fontSize = fontSize.value + 'px';
    }
    fontSize.addEventListener('change', updateSize, false);
    testText.addEventListener('input', updateTest, false);
    testText.addEventListener('change', updateTest, false);
    updateSize();
}());


