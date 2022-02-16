$(document).ready(function() {


    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
         //>=, not <=
        if (scroll >= 60) {
            //clearHeader, not clearheader - caps H
            $(".navbar").addClass("bg-transparent");
        } else {
          $(".navbar").removeClass("bg-transparent");
        }
    }); //missing );
      
      
      
      
    
      
    // document ready  
    });