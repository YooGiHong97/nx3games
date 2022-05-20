var state={
    querySet: '',
}


function tableData (){
    
    $.ajax({
        url: 'https://nxnxapi.com/gameproject/game_project_all.do',
        dataType: 'json',
        type: 'GET',
        })
        .done(function(data){ 

            var row_length = "";
            for(var i=0; i<data.game_data.length; i++){
                row_length = data.game_data.length;
            }
            
             state = {
                querySet: data.game_data,
 
                page: 1,
                rows: row_length,
                window: 1,
            } 
            buildTable();
        })
    }

function pagination(querySet, page, rows) {

   var trimStart = (page - 1) * rows
   var trimEnd = trimStart + rows

   var trimmedData = querySet.slice(trimStart, trimEnd)

   /* Math.round - 소수점 반환 */
   var pages = Math.round(querySet.length / rows);

   return {
       'querySet': trimmedData,
       'pages': pages,
       
   }
}

/*************************************************************************************/
/* 개발중 ~ 채용 공고 보기 container */
/*************************************************************************************/
function buildTable() {
    var table = $('#slide_con')
 
    var data = pagination(state.querySet, state.page, state.rows)
    var myList = data.querySet
     
    for (var i = 0; i < myList.length; i++) {

            var row = 
            `
            <div id="slide${myList[i].id}" data-hash="${myList[i].id}" class="item slide${myList[i].id}">
                    <div class="sokka">
                        <img id="sld-1" src="https://nxnxapi.com/${myList[i].img_list[0].url}" class="slider-bg-img"  alt="">
                    </div>

                    <img id="sld-2" src="https://nxnxapi.com/${myList[i].img_list[1].url}" class="slider-bg-img"  alt="">
                    
                <div class="caption">
                    <div id="game_charactor${myList[i].id}" class="game_char">

                    </div>

                    <div class="info_wrap" id="info_wrap${myList[i].id}">

                           
                        <div class="game_service">
                            <h3 class="game_logo">
                                <span class="blind"></span>
                            </h3>

                            <div id="sasasa${myList[i].id}" class="service_p">
                                
                            </div>
                        </div>
        
                        <div class="game_name">${myList[i].game_name}

                        </div>
        
                        <div id="game_desc${myList[i].id}" class="desc_wrap">
                            <p class="game_desc_hr">${myList[i].game_desc}</p>
                        </div>
        
                        <div id="prize_item" class="prize_wrap">
                            <ul class="prize_list">                        
                                <li class="item${myList[i].id}">${myList[i].prize_item}</li>
                            </ul>
                        </div>
        
                        <div id="game_weblink" class="link_wrap">
                            <ul class="link_list">
                                <li class="item_web${myList[i].id}"><a href="${myList[i].game_weblink}" target="_blank" class="btn btn_link"><p class="sibaa">${myList[i].pro_button_name}</p></a></li>
                            
                            </ul>
                        </div>

                        <div id="store_wrap" class="store_wrap">
                            <ul id="store_url${myList[i].id}" class="store_list"> 
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `

            table.append(row)

            
            /*************************************************************************************/ 
            /*
            var isMobile = /Android|iPhone/i.test(navigator.userAgent)
            jQuery(document).ready(function($){
                if(!isMobile){
                    //PC
                    var ddd_ss = `${myList[i].id}`
                    document.getElementById("#sldd-).style.display = "none";
                    
                }else{
                    //모바일
                    document.getElementById("sld-1").style.display = "none";
                }
            });
            */


            /*************************************************************************************/
            /* games - 개발중/서비스 */
            /*************************************************************************************/
            if(myList[i].pro_state == ["서비스"]){
                var sas_ss = "#sasasa";
                var sas_sss =  `${myList[i].id}`;
                //console.log(table_ss);
                //console.log(table_sss);
                var sas = $(sas_ss + '' + sas_sss);
                
                var ala = `<span id="pro_state" class="global">${myList[i].pro_state}</span>`
                
                sas.append(ala);

            }else if(myList[i].pro_state == ["개발중"]){
                console.log("개발중=", myList[i].pro_state);
                var qwa_ss = "#sasasa";
                var qwa_sss =  `${myList[i].id}`;
                //console.log(table_ss);
                //console.log(table_sss);
                var qwa = $(qwa_ss + '' + qwa_sss);
                
                var lal=
                `
                <span id="pro_state" class="global_n">${myList[i].pro_state}</span>
                `
                qwa.append(lal);
            }

            
             /*************************************************************************************/


            /*************************************************************************************/
            /* games - sub_image */
            /*************************************************************************************/
            if(myList[i].img_list[2] == null){
                
            }else if(myList[i].img_list[2] != null){
                //console.log("img_list 순서=", myList[i].img_list[2].url);
                var table_ss = "#game_charactor";
                var table_sss =  `${myList[i].id}`;
                //console.log(table_ss);
                //console.log(table_sss);
                var table_1 = $(table_ss + '' + table_sss);
                //console.log("table_1 =",table_1);
                var row_char_img = 
                `
                <img src="https://nxnxapi.com/${myList[i].img_list[2].url}" alt=""></img>
                `

                table_1.append(row_char_img)
            }
            /*************************************************************************************/
                

            /*************************************************************************************/
            /* games - 게임 설치 앱 링크 */
            /*************************************************************************************/
            if(myList[i].google_play_url == ""){

            }else if(myList[i].google_play_url != ""){
                //console.log("img_list 순서=", myList[i].img_list[2].url);
                var table_aa = "#store_url";
                var table_aaa =  `${myList[i].id}`;
                //console.log(table_ss);
                //console.log(table_sss);
                var table_2 = $(table_aa + '' + table_aaa);
                //console.log("table_1 =",table_1);
                var row_store_url =
                `
                <li id="item1" class="item"><a href="${myList[i].app_store_url}" target="_blank" class="btn spr_game spr_store apple" title="App Store"></a></li>
                <li id="item2" class="item"><a href="${myList[i].google_play_url}" target="_blank" class="btn spr_game spr_store google" title="Google Play"></a></li>
                <li id="item3" class="item"><a href="${myList[i].galaxy_store_url}" target="_blank" class="btn spr_game spr_store galaxy" title="Galaxy Store"></a></li>
                <li id="item4" class="item"><a href="${myList[i].one_store_url}" target="_blank" class="btn spr_game spr_store one" title="One Store"></a></li>
                `
                table_2.append(row_store_url)
            }   
            /*************************************************************************************/
            
            }
/*************************************************************************************/


/*************************************************************************************/
/* owl slide */
/*************************************************************************************/

$(function(){
    $('.slider .owl-carousel').owlCarousel({
       loop:true,
        nav:true,
        dots:false,
        items:1,
        autoplay:false,
        smartSpeed:5000,
        animateOut:'fadeOut',
        URLhashListener:true,
        autoplayHoverPause:false,
        startPosition: 'URLHash',
        center:false,
        mouseDrag:true,
        pullDrag:true,
        freeDrag:false,
        slideTransition: 'fast',
        responsiveClass:true,
        
        responsive: {
            0: {
                items: 1,               
                loop:true
            },
            2000: {
                items: 1,               
                loop:true
            },
            4000: {
                items: 1,               
                loop:true
            },
            6000: {
                items: 1,               
                loop:true
            },
            8000: {
                items: 1,               
                loop:true
            }
        }
    })
})
/*************************************************************************************/
        }
/*************************************************************************************/
function close_active(){
    
    document.getElementById("son").click();
}
 tableData()


