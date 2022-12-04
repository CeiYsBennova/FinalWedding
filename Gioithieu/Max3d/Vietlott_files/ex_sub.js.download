$(function() {

    //menu vl3
    $(document).ready(function(){
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
            event.preventDefault(); 
            event.stopPropagation(); 
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
        });
    });

    // When the user scrolls down 20px from the top of the document, show the button
    $(window).scroll(function(){

        if ($(this).scrollTop() > 200) {
            $('.btn_backtop').fadeIn();
        }
        else {
            $('.btn_backtop').fadeOut();
        }

    });

    // When the user clicks on the button, scroll to the top of the document
    $('.btn_backtop').click(function() {
        $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
    })

    // When the user clicks on the button, scroll to the top of the document
    $('.btn_search').click(function() {
        $('.form-group').toggle('hidden_up992');
    })
});