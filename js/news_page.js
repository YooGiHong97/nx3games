function getParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var al = getParameter("index");
console.log(al);




function tableData (){
    var contact2 = [];
    $.ajax({
        url: 'https://nxnxapi.com/news/read_news.do?index='+ al +'',
        dataType: 'json',
        type: 'GET',
        })
        .done(function(data){
            document.getElementById("table-aa").innerHTML = data.news_title;
            document.getElementById("table-bb").innerHTML = data.editdate;
            document.getElementById("table-cc").innerHTML = data.news_content1;
            document.getElementById("table-dd").innerHTML = data.news_content2;
            document.getElementById("table-ee").innerHTML = data.news_content3;
            document.getElementById("table-ff").innerHTML = data.news_content4;
            document.getElementById("table-gg").innerHTML = data.news_content5;
            document.getElementById("table-rr").innerHTML = data.news_content6;

            
            
                if (data.image_list[4] != null) {
                    $("#span-aa").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[0].img_url + `"> </li>`);
                    $("#span-bb").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[1].img_url + `"> </li>`);
                    $("#span-cc").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[2].img_url + `"> </li>`);
                    $("#span-dd").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[3].img_url + `"> </li>`);
                    $("#span-ee").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[4].img_url + `"> </li>`);
                    
                } else if (data.image_list[3] != null) {
                    $("#span-aa").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[0].img_url + `"> </li>`);
                    $("#span-bb").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[1].img_url + `"> </li>`);
                    $("#span-cc").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[2].img_url + `"> </li>`);
                    $("#span-dd").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[3].img_url + `"> </li>`);
                    console.log("img=", data.image_list[0].img_url);
                    
                } else if (data.image_list[2] != null) {
                    $("#span-aa").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[0].img_url + `"> </li>`);
                    $("#span-bb").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[1].img_url + `"> </li>`);
                    $("#span-cc").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[2].img_url + `"> </li>`);
                    
                    console.log("img=", data.image_list[0].img_url);
                    
                } else if (data.image_list[1] != null) {
                    $("#span-aa").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[0].img_url + `"> </li>`);
                    $("#span-bb").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[1].img_url + `"> </li>`);
                    
                    console.log("img=", data.image_list[0].img_url);
                    
                } else if (data.image_list[0] != null) {
                    $("#span-aa").append(`<li><img class="saksak2" src ="https://nxnxapi.com` + data.image_list[0].img_url + `"> </li>`);
                    
                    
                    console.log("img=", data.image_list[0].img_url);
                    
                }

                
            
           
            
            for(var k =0; k <data.news_index.length; k++){
            

                var contact = data.news_index[k].news_idx;
                
                
                contact2[k] = JSON.stringify(contact);
            
            }
            var a2 = contact2.indexOf(al);
                var backa = a2-1;
                var backaa = contact2[backa];

                var fronta = a2+1;
                var frontaa = contact2[fronta];
            
                console.log("backaa",backaa);
                console.log("frontaa",frontaa);
                if(frontaa == undefined){
                    $("divl").append(`<img src="./images/news/hide_left.png" alt="">`);
                }else {
                    $("divl").append(`<a id="move_left_nes" href="news_page.html?index=${frontaa}"><img class="news_page_m1" src="./images/news/news_page_left.png" alt=""></a> `);
                }

                if(backaa == undefined){
                    $("divs").append(`<img src="./images/news/hide_right.png" alt="">`);
                }else{
                    $("divs").append(`<a id="move_right_nes" href="news_page.html?index=${backaa}"><img class="news_page_m1" src="./images/news/news_page_right.png" alt=""></a> `);
                }
        })
    }



    tableData();
    