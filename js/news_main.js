
$(document).ready(function() {
    $.getJSON("https://nxnxapi.com/news/news_all.do",function(data) {
        $.each(data.news_data, function(){
            $('div')
                $("ulk").append(`<li class="img_sak"><a href="news_page.html?index=${data.news_data[0].index}"><img class="img_sak2" src ="https://nxnxapi.com` + data.news_data[0].img_url + `"></a> </li>`);
                $("ulk").append(`<li class="title_sak"><a href="news_page.html?index=${data.news_data[0].index}">` + data.news_data[0].news_title + `</li>`);
                $("ulk").append(`<li class="content1_sak"><a href="news_page.html?index=${data.news_data[0].index}">` + data.news_data[0].news_content1 + `</li>`);
                $("ulk").append(`<li class="edit_sak">` + data.news_data[0].editdate + `</li>`);
            $("/div")
        });
    });
});

