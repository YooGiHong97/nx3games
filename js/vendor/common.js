var _pa=function(c){

    "use strict";var e,t=!1,a=function(){
      $.fn.customDatepicker=function(e){if(!$.isFunction($.fn.datepicker))return!1;
      var t=e||{};c.isEmpty(t.language)&&
      this.datepicker(t)},$.fn.getCustomDate=function(e){if($.isFunction($.fn.datepicker))return this.datepicker("getDate",e)},
      $.fn.setCustomDate=function(e){$.isFunction($.fn.datepicker)&&this.datepicker("setDate",e)}
    },
    
      n=function(){$("#page_wrap").on("click",".js-paging button:not(.disabled)",
      function(e){var t=$(this),a=t.parents("form").first(),n=t.data();a.find('[name="_pageNo"]').val(n.page),a.submit()})},
      
      // nav bar 
      o=function(){
        var o=$("body"),s=$("header"),i=o.find(".js-navDim"),e=s.find(".js_header_nav"),t=s.find(".js_header_lang"),
      a=s.find(".js-mobileNav"),n=a.find(".js-item");i.on("click",function(){e.removeClass("active"),o.removeClass("mobile_nav_active"),
      i.fadeOut(300)}),e.on("click",function(e){if($(this).hasClass("active"))$(this).removeClass("active"),o.removeClass("mobile_nav_active"),
      i.fadeOut(300);else{i.fadeIn(300);var t=$(".sub_item a.active").parents(".js-item"),
      a=!1!==Boolean(document.getElementById("game_nav"))?Array.prototype.slice.call(document.getElementById("game_nav")
      .children):null;if(a)for(var n=0;n<a.length;n++)a[n].classList.contains("active")&&document.querySelectorAll(".sub_game .sub_item")[n]
      .children[0].click();$(this).addClass("active"),t.hasClass("active")||t.find("> a").click(),s.find(".inner").css({transform:""}),
      o.addClass("mobile_nav_active")}}),a.find(".js-navTitle").on("click",function(e){var t=$(this).parents(".js-item");$(this).parents(".item");
      _pa.IsTabletScreen()?(e.preventDefault(),e.stopPropagation()):_pa.isMainMobile(window.navigator.userAgent)&&e.preventDefault(),
      t.hasClass("active")?n.removeClass("active"):(n.removeClass("active"),t.addClass("active"))}),
      t.on("click",function(){$(this).toggleClass("active")})
      },
      
      // lineMove 
      s=function(){var e=$(".js-lineMove").find("li");
      e.on("mouseover",function(){var e=$(this),t=e.parents(".js-lineMove"),a=e.find("a"),n=t.find(".line"),o=a.width();a.outerWidth();
      c.IsTabletScreen()&&(o=0);var s={left:a.position().left+a.outerWidth()/2-o/2||0,width:o||0};n.css(s)}),
      e.on("mouseleave",function(){var e=$(this).siblings("li.active");e.length&&e.trigger("mouseover")})},
  
      i=function(){};
  
      c.ScrollEvent=function(e){$(window).on("scroll",function(){e&&e(window.scrollY||window.pageYOffset)})};
      var r=function(n){$(".js-scrollOn").each(function(e,t){var a=$(t).offset().top||0;!$(t).hasClass("on")&&a<=n+innerHeight?($(t).trigger("scrollshow"),
      t.classList.add("on")):$(t).hasClass("on")&&a>n+innerHeight&&($(t).trigger("scrollhide"),t.classList.remove("on"))})},
  
      l=function(){new Date-e<200?setTimeout(l,200):(t=!1,"function"==typeof window.paResize&&(window.paResize(),1280<window.innerWidth&&$(".btn_header_lang").removeClass("active")),$(".js-lineMove .js-item.active").trigger("mouseover"))};
  
      return c.isMAC=0<=navigator.platform.toUpperCase().indexOf("MAC")&&0==navigator.maxTouchPoints,c.isIOS=navigator.userAgent.match(/iPhone|iPad|iPod/i),
      c.isEdge=-1<navigator.userAgent.indexOf("Edge"),c.isIE=document.querySelector("html").getAttribute("data-ie").toLocaleLowerCase(),
      c.InitCurrentMenu=function(e){var t=document.createElement("a")
      t.href=e,a.hasOwnProperty(t.hash.toLowerCase())&&t.hash!==a[t.hash.toLowerCase()]?(t.hash="#"+a[t.hash.toLowerCase()],
      location.hash=t.hash,$(window).trigger("hashchange")):$("#navTitleGame")
      .attr("href")==t.href?t.hash="#BlackDesert":-1<t.href.search(new RegExp("/IR/Announcement","i"))?t.href=t.href.replace(/Announcement/i,"Disclosure"):-1<t.href.search(new RegExp("/IR/Data","i"))&&(t.href=t.href.substr(0,t.href.search(new RegExp("IR/Data","i")))+"IR/Data/Performance");
      
      var n=$("header nav").find('.sub_item a[href="'+e+'"]');0<n.length&&($(".sub_item a").removeClass("active"),
      n.addClass("active"),n.closest(".js-item").addClass("active").trigger("mouseover"));var o=$("footer .js-footerNav").find('a[href="'+t.href+'"]');
      0<o.length&&($(".js-footerNav li a").removeClass("active"),o.addClass("active"),o.closest(".js-item").addClass("active"))},
      c.isEmpty=function(e,t){var a=!0;try{$.isNumeric(e)&&(e=e.toString()),$.isPlainObject(e)&&(e=JSON.stringify(e)),
      "object"==typeof e&&(e=e.value||e),e=e||"",(t&&0<e.replace(/\s/gi,"").length||!t&&0<e.length)&&(a=!1)}catch(e){a=!0}return a},
      c.isNumber=function(e){var t=!1;try{(0<parseInt(e)||parseInt(e)<=0)&&(t=!0)}catch(e){t=!1}return t},
      c.isValidDate=function(e){try{if(e=e.replace(/-/g,""),isNaN(e)||8!=e.length)return!1;var t=Number(e.substring(0,4)),
      a=Number(e.substring(4,6)),n=Number(e.substring(6,8));if(a<1||12<a)return!1;
      return!(n<=0||(2==a&&(t%4==0&&t%100!=0||t%400==0)?29:[31,28,31,30,31,30,31,31,30,31,30,31][a-1])<n)}catch(e){return!1}},
      c.isMobile=function(){return $("body").hasClass("mobile")},
      c.isMainMobile=function(e){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)},
      c.checkFieldValid=function(e,t,a){var n=!0,o=null;return(o=$.isFunction(e.get)?e:$(e)).is('[type="hidden"]')?n=!1:c.isEmpty(o.val())&&(n=!1,a&&o.focus(),
      c.isEmpty(t)||alert(t)),n},c.checkEmailValid=function(e,t,a){var n=!0,o=null,o=$.isFunction(e.get)?e:$(e);
      return c.checkFieldValid(o,t)?/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z_-])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,4}$/i.test(o.val())||(n=!1,a&&o.focus(),c.isEmpty(t)||alert(t)):n=!1,n},
      c.loading=function(e,t,a,n){var o=n||$(".loadingLayer"),a=a||$("body");
      e?(a.append('<div class="loadingLayer"><div class="loading_progress_wrap"><div class="inner"><div class="loading_circle"><div class="loader"></div></div></div></div></div>'),
      a.append(function(){c.fadeInCallback(a.find(".loadingLayer"),t)})):c.fadeOutCallback(o,t,function(e){e.remove()})},
      c.removeTag=function(e,t){return c.isEmpty(tagRemove)?"":e.replace(/(<([^>]+)>)/gi,t?" ":"")},
  
      c.removeCookie=function(e,t){var a,n,o=t||location.host;c.isEmpty(c.getCookie(e))||((a=new Date)
      .setDate(a.getDate()+-1),n=e+"=; domain="+o+"; path=/ ",n+=";expires="+a.toGMTString()+";",document.cookie=n)},
      c.getCookie=function(e){e+="=";var t,a=document.cookie,n=a.indexOf(e),o="";return-1!=n&&(n+=e.length,-1==(t=a.indexOf(";",n))&&(t=a.length),
      o=a.substring(n,t)),unescape(o)},c.IsTabletScreen=function(e){var t,a=!_pa.isEmpty(e)&&0<e?e:1024;return t=a,window.innerWidth<=t},
      c.IsMobileScreen=function(){return window.innerWidth<768},c.PreventOwlTouchScroll=function(e){var a,n,o,s,t,i;0<e.length&&((t=e[s=o=n=a=0])
      .addEventListener("touchstart",function(){a=event.changedTouches[0].screenX,n=event.changedTouches[0].screenY,i()},!1),t
      .addEventListener("touchmove",function(){o=event.changedTouches[0].screenX,s=event.changedTouches[0].screenY},!1),
      i=function(e){var t=Math.abs(o-a);Math.abs(s-n);return!(50<t)})},
      c.IsInWrap=function(e,t,a){var n=(void 0).scrollTop,o=e.offset().top,s=e.outerHeight();return o+s*t<n&&n<o+s*a},
      c.IsPinMotionForIE=function(e){"object"==typeof e&&"false"!=c.isIE&&e.target.triggerElement().classList.add("pinIE")},
      c.IsPinDurationForIE=function(e,t){if("false"==c.isIE)return e;var a="",n=e;return"number"!=typeof n&&(a=e.substr(-1),
      n=n.split(a)[0]),n*t+a},c.initFloatingBanner=function(){var e=$(".floatingBanner.hide");
      e.length<=0||e.each(function(e,t){var a=$(this).clone(),n=$(a.data("move"));a.removeClass("hide"),0<n.length&&(n.append(a),$(this).remove())})},
      c.inputMask=function(e,t){c.isEmpty(e)||e.inputmask(t)},a(),n(),o(),s(),i(),
  
  
  
      $(function(){$(".js-initBg").addClass("on")}),window.onload=function(){c.InitCurrentMenu(location.href.split("?")[0])},
      window.onresize=function(){e=new Date,u(),!1===t&&(t=!0,setTimeout(l,200))},
  c}
          (window._pa||{},jQuery);
  
  
  /**
    * Common:ScrollMagic Controller
    */
   var $ = jQuery
   var controller = new ScrollMagic.Controller();
   
   //==================================================*
   //	Document:Ready
   //==================================================*
   $(document).ready(function(){
       
      //  ScrollMagic Common Animation
  
      //   ScrollMagic: Opacity
       if($('.a-Opacity').length > 0){
           $('.a-Opacity').each(function(){
               var Opacity = new ScrollMagic.Scene({
                   triggerElement: this.children[0],
                   triggerHook:0.9
               })
               .reverse(false)
               .setClassToggle(this, 'is-Opacity')
               .addTo(controller);
           });
       }
    
  
   });
   
   //==================================================*
   //	Window:Ready
   //==================================================*
  //  $(window).ready(function(){
  //      /**
  //       * Main KeyVisual
  //       */
  //      $('body').addClass('is-Play');
  //  });
   
   //==================================================*
   //	Window:Safari Check
   //==================================================*
   $(function() {
     if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
       $('body').addClass('Safari');
     }
   });