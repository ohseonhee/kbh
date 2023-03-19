


//  mobile smNav
//아코디언 


var navMobile = {
    init: function() {
        this.moAction();
    },
    moAction: function() {
       
        
        $('.nav_btn').on('click',function(){
          $(this).toggleClass('on');
          if($('.nav_btn').hasClass('on')){
               $('.gnb_mobile').addClass('on') ;
                $('.home').css("position","fixed");
                $('#header').addClass('on');
          }else{
            
             $('.gnb_mobile').removeClass('on') ;
                $('.home').css("position","relative");
                $('#header').removeClass('on');
          }
                            
        });
    }
};



var smooth = {
    init: function() {
        this.smooth_move();
    },
    smooth_move: function() {
        
            $('.gnb_wrap .gnb_box li a').click(function(){
                $('html, body').animate({
                    scrollTop: $( $.attr(this, 'href') ).offset().top + 20
                }, 700);
                return false;
            });


            $('.gnb_mobile .gnb_box li a').click(function(){
               
                $('.gnb_mobile').removeClass('on') ;
                $('.home').css("position","relative");
                $('.nav_btn').removeClass('on');
                $('#header').delay(500).removeClass('on');
                
                $('html, body').delay(500).animate({
                    scrollTop: $( $.attr(this, 'href') ).offset().top
                }, 700);

                return false;
            });


          var sectionPosition = [];
          var sectionHeight = [];
            $('.page-con').each(function() {
                sectionPosition.push($(this).offset().top );
                sectionHeight.push($(this).height());
            });  


            $(document).scroll(function(){
              
                var position = $(document).scrollTop(),
                    index; 
                for (var i=0; i<sectionPosition.length; i++) {
                    if (position > sectionPosition[i] && position <= sectionHeight[i] + sectionPosition[i]) {
                        index = i;
                        break;
                    }
                }
                // console.log(position)
                $('.gnb_wrap .gnb_box li a').removeClass('on');
                $('.gnb_wrap .gnb_box li:eq('+ index +')').find('a').addClass('on');
            });


           
      
    }
};

 var visualAni = {
     init: function() {
         this.visualJs();
     },
     visualJs: function() {

        $('.visual_deco_box').delay(500).addClass('ani_start');

     }

};

 var scroll = {
     init: function() {
         this.scrollJs();
     },
     scrollJs: function() {

        $(document).scroll(function(){
          if($(this).scrollTop() > 10){
            $('#header').addClass('scroll');
          }else{
            $('#header').removeClass('scroll');
          }
        })

     }

};


 var topBtn = {
     init: function() {
         this.topBtnJs();
     },
     topBtnJs: function() {

        $(document).scroll(function(){
          if($(document).scrollTop() > 100){
            $('.topbtn').stop().fadeIn('fast');
          }else{
            $('.topbtn').stop().fadeOut('fast');
          }
        });

        $('.topbtn').click(function(){
                $('html, body').animate({
                    scrollTop:0
                }, 700);
        });

     }

};


    //변수 불러오기 
$(document).ready(function(){
    visualAni.init();
    scroll.init();
    navMobile.init();
    smooth.init();
    topBtn.init();
    $(window).resize(function(){
    
    })

  
  $('.wow_wrap').each(function() {
 
    $(this).find('.wow').each(function(index) {
      var up = (index+1)/3+"s";
      $(this).attr('data-wow-delay',up);
    });
  });




    new WOW().init({
      boxClass: 'wow', // default
      animateClass: 'animated', // default
      offset: 150,
      mobile: true, // default
      live: true // default
    });    



});





