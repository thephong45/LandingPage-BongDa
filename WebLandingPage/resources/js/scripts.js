$(document).ready(
    function(){
        // alert('hello nhe!!!');
        // $('h1').css('color', 'red');
        // $('h1').click(
        //     function(){
        //         $(this).css('color', 'red');
        //         // this thay thế cho thẻ h1
        //     }
        // )

        // sticky-nav
        $('.about-section').waypoint(
            function(direction){
                if(direction == 'down'){
                    $('nav').addClass('sticky');
                }
                else{
                    $('nav').removeClass('sticky');
                }

            }, { offset:'600px'}
        )
        
        // Scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 1000);
            event.preventDefault();
        });

        //mobile navigation
        $('.mobile-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);

                if($('.mobile-nav-icon').hasClass('fa-bars')){
                    $('.mobile-nav-icon').addClass('fa-times')
                    $('.mobile-nav-icon').removeClass('fa-bars')
                }
                else{
                    $('.mobile-nav-icon').addClass('fa-bars')
                    $('.mobile-nav-icon').removeClass('fa-times')
                }
            }
        )


    }
)