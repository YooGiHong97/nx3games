//==================================================*
//	Common
//==================================================*
/**
 * Common:Variable
 */
 var $ = jQuery


 //==================================================*
 //	Document:Ready
 //==================================================*
 $(document).ready(function(){
     // KeyVisual Scroll Bg
     //==================================================*
     if($('.KeyVisual').length > 0){
         function KeyVisualFix() {
             var topHead = 0;
             var thisTop = $(this).scrollTop();
             var bgTop = $(this).scrollTop() - topHead;
             var top_header = $('.KeyVisualBoxBGSecond-item video');
             top_header.css({'transform':'translateY(0px)'}); // better use CSS
             
             if(thisTop > topHead){
                     top_header.css({'transform':'translateY('+(bgTop*.50)+'px)'});
             }
         };
         $(window).on('resize', KeyVisualFix);
         $(window).on('scroll', KeyVisualFix);
         KeyVisualFix();
     }
     
     /**
      * CategoryTabBlackBar
      */
     if($('.KeyVisual').length > 0){
         function KeyVisualHeight() {
             var windowHeight = $(window).height();
             var adminHeight = $('#wpadminbar').height();
             $('.KeyVisual-container').css('height', windowHeight);
             
             if($('#wpadminbar').length > 0){
                 $('.KeyVisual-container').css('height', windowHeight - adminHeight);
             }
         }
         KeyVisualHeight();
         $(window).on('resize', KeyVisualHeight);
     }
     
     /**
      * Main Scroll Button
      */
      function KeyVisualScroll() {
          var offset = $('.MainNews').offset();
          var adminHeight = $('#wpadminbar').height();
         
         if($('#wpadminbar').length > 0){
             $('html, body').animate({scrollTop : offset.top - adminHeight }, 400);
         }else{
             $('html, body').animate({scrollTop : offset.top}, 400);
         }
      }
      
      $(document).on('click', '.KeyVisualScroll-link', KeyVisualScroll);
      
      /**
      * NewsSlide
      */
      if($('.MainNews').length > 0){
         var ScrollSlideSection = undefined;
         function sectionSwiper() {
             var screenWidth = $(window).width();
             if(screenWidth < 768 && ScrollSlideSection == undefined) {            
                 ScrollSlideSection = new Swiper('.MainNewsSlide-container', {            
                     slidesPerView: "1",
                     freeMode: true,
                     scrollbar: {
                       el: ".MainNewsSlide-scrollbar",
                       hide: true,
                     },
                 });
             } else if (screenWidth > 767 && ScrollSlideSection != undefined) {
                 ScrollSlideSection.destroy();
                 ScrollSlideSection = undefined;     
             }        
         }
 
         //Swiper plugin initialization
         sectionSwiper();
 
         //Swiper plugin initialization on window resize
         $(window).on('resize', function(){
             sectionSwiper();        
         });
      }
 
     /**
      * CareersSlide
      */
      if($('.MainCareesrs').length > 0){
         var ScrollSlideCareesrs = undefined;
         function CareesrsSwiper() {
             var CareesrsWidth = $(window).width();
             if(CareesrsWidth < 768 && ScrollSlideCareesrs == undefined) {            
                 ScrollSlideCareesrs = new Swiper('.MainCareesrsSlide-container', {            
                     slidesPerView: "auto",
                     freeMode: true,
                     scrollbar: {
                       el: ".MainCareesrsSlide-scrollbar",
                       hide: true,
                     },
                 });
             } else if (CareesrsWidth > 767 && ScrollSlideCareesrs != undefined) {
                 ScrollSlideCareesrs.destroy();
                 ScrollSlideCareesrs = undefined;        
             }        
         }
 
         //Swiper plugin initialization
         CareesrsSwiper();
 
         //Swiper plugin initialization on window resize
         $(window).on('resize', function(){
             CareesrsSwiper();        
         });
      }
       
       /**
      * ScrollMagic: Black Bg
      */
      var BlackHeight = $('.MainGame ').height();
      var MainStudiosHeader = $(window).height()/2.5;
      var WindowBlackHeight = BlackHeight + MainStudiosHeader;
      
      $(window).on("resize", function () {
          var BlackHeight = $('.MainGame ').height();
          var MainStudiosHeader = $(window).height()/2.5;
          var WindowBlackHeight = BlackHeight + MainStudiosHeader;
     });		
     
      function getBlackHeight() {
         return WindowBlackHeight;
     }
     
     if($('.MainGame').length > 0){
         $('.MainGame').each(function(){
             var BlackBg = new ScrollMagic.Scene({
                 triggerElement: '.MainGame',
                 duration: getBlackHeight
             })
             .setClassToggle('body', 'Bg-black')
             .addTo(controller);
         });
     }
     
      /**
      * Studios Hover
      */
      function StudiosOver() {
         $(this).closest('.MainStudiosCard-item').addClass('is-Active').siblings('li').removeClass('is-Active');
      }
      $(document).on('mouseover', '.MainStudiosCardItem-link', StudiosOver);
      
      /**
      * ScrollendWhite
      */
     if($('.MainStudios').length > 0){
         function ScrollendWhite() {
             var SiteFooter = $('.site-footer').height();
             $(window).scroll(function(){
                 if ($(window).scrollTop() >= $(document).height() - $(window).height() - SiteFooter){
                     $('body').removeClass('Bg-black');
                 }
             }); 
         }
         ScrollendWhite();
         $(window).on('resize', ScrollendWhite);
     }
     
     /**
      * MainIntro
      */
     if($('.MainIntro').length > 0){
         $('html').addClass('is-Intro');
     }
     
     /**
      * MainIntroClose
      */
      function MainIntroClose() {
         $('.MainIntro').removeClass('is-View');
         $('html').removeClass('is-Intro');
         $('.site').addClass('is-ViewPop');
         $('.site').removeClass('is-cookiePop');
      }
      
      $(document).on('click', '.intro-Close', MainIntroClose);
      
      /**
      * MainIntroPopView
      */
      function MainIntroPopView() {
         $('.site').removeClass('is-ViewPop');
         $('html').addClass('is-Intro');
         $('.MainIntro').addClass('is-View');
         $('.site').removeClass('is-cookiePop');
         $('#MainIntroVideo').get(0).play();
      }
      
       $(document).on('click', '.MainIntroPopThumb-link', MainIntroPopView);
      
      /**
      * MainIntroPopClose
      */
      function MainIntroPopClose() {
         $('.site').removeClass('is-ViewPop');
         $('html').removeClass('is-Intro');
         $('.MainIntro').removeClass('is-View');
      }
      
       $(document).on('click', '.MainIntroPop-close', MainIntroPopClose);
       
         var getCookie = function(cname){
             var name = cname + "=";
             var ca = document.cookie.split(';');
             for(var i=0; i<ca.length; i++) {
                 var c = ca[i];
                 while (c.charAt(0)==' ') c = c.substring(1);
                 if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
             }
             return "";
         }
         
     if($('.MainIntro').length > 0){
         // 24ì‹œê°„ ê¸°ì¤€ ì¿ í‚¤ ì„¤ì •
         var setCookie = function (cname, cvalue, exdays){
             var todayDate = new Date();
             todayDate.setTime(todayDate.getTime() + (exdays*24*60*60*1000));
             var expires = "expires=" + todayDate.toUTCString();
             document.cookie = cname + "=" + cvalue + "; ";
         }
         
         var couponClose = function(){
             setCookie("close","Y",1); //ê¸°ê°„(1ì€ í•˜ë£¨, 7ì€ ì¼ì£¼ì¼)
             $('.MainIntro').removeClass('is-View');
             $('html').removeClass('is-Intro');
             $('.site').addClass('is-cookiePop');
             $('.site').addClass('is-ViewPop');
         }
         
         $(".intro-Close").click(function(){
             $('#MainIntroVideo').get(0).pause();
             
             if($('#cookie-law-info-bar').css('display') === 'none'){
                 couponClose();
             }
         });
     }
 });

//  home page animations
// character
 gsap.from('.home_character', {duration: 0.2, opacity: 0, x: '-5%', y: '5%'})

// logo
 gsap.from('.home_logo01', {duration: 0.5, opacity: 0, y: '50%', delay: 0.2})
 gsap.from('.home_logo02', {duration: 0.6, opacity: 0, y: '75%', delay: 0.3})
 gsap.from('.home_logo03', {duration: 0.8, opacity: 0, y: '90%', delay: 0.6})       
 

 //Next X left fixed

const nextX = document.querySelector('.NextX');
// const nextArrow = document.querySelector('.next-arrow');
const nextXmoreText = document.querySelector('.NextXmore-text');

nextX.addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    // event.target.style.color = "purple";

    // gsap.from('.next-arrow', {duration: 1, opacity: 0.8, x: '30%', delay: 0.1}) 
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 1000);
  }, false);
  
  // This handler will be executed every time the cursor
  // is moved over a different list item
  nextX.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    nextXmoreText.style.color = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
     nextXmoreText.style.color  = "";
     nextArrow.style.color  = "";
    }, 500);
  }, false);

//Next X at footer fixed
const nextXfooter = document.querySelector('.NextXfooter');
// const nextArrowFooter = document.querySelector('.NextXfooter-right-icon');
const nextXfooterText = document.querySelector('.NextXfooter-right-text');

// nextXfooter.addEventListener("mouseenter", function( event ) {

//     gsap.from('.NextXfooter-right-icon', {duration: 1, opacity: 1, x: '-13%', delay: 0}) 
  
//     setTimeout(function() {
//       event.target.style.color = "";
//     }, 1000);
//   }, false);
  

  nextXfooter.addEventListener("mouseover", function( event ) {

    nextXfooterText.style.color = "orange";
  
    setTimeout(function() {
        nextXfooterText.style.color  = "";
    
    }, 500);
  }, false);

(window._pa.main||{},jQuery);



// navbar transparent/white change 


