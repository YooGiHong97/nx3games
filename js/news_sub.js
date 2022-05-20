
var state={
    querySet: '',
}

function tableData (){
    
    $.ajax({
        url: 'https://nxnxapi.com/news/news_all.do',
        dataType: 'json',
        type: 'GET',
        })
        .done(function(data){
            
             state = {
                querySet: data.news_data,
                /* 1페이지에 ~ */
                page: 1,
                /* 한 페이지에 출력될 뉴스 */
                rows: 3,
                /* 최대 더보기 */
                window: 5,
                
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

function pageButtons(pages) {
   var wrapper = document.getElementById('pagination-wrapper')

   wrapper.innerHTML = ``
   console.log('Pages:', pages);


   var maxLeft = (state.page - Math.floor(state.window / 2))
   var maxRight = (state.page + Math.floor(state.window / 2))

   if (maxLeft < 1) {
       maxLeft = 1
       maxRight = state.window
   }
   if (maxRight > pages) {
       maxLeft = pages - (state.window - 1)
       
       if (maxLeft < 1){
           maxLeft = 1
       }
       maxRight = pages
   }
   
   /* 페이징 버튼(paging) */
   for (var page = maxLeft; page <= maxRight; page++) {
       wrapper.innerHTML += `<button value=${page} class="page active${page} csa" style="background-color:#fff; height:50px;">${page}</button>`
   }

   /* 이전페이지 버튼(prev) */
   if (state.page = 1) {
       wrapper.innerHTML = `<button value=${1} class="page csa2" style="background-color:#fff;"> < </button>` + wrapper.innerHTML
   }
   
   /* 다음페이지 버튼(next) */
   if (state.page != pages) {
       wrapper.innerHTML += `<button value=${pages} class="page csa3" style="background-color:#fff;"> > </button>`
   }

   $('.page').on('click', function() {
       $('#table-body-s').empty()
       state.page = Number($(this).val())
       buildTable()
   })
}


function buildTable() {
    var table = $('#table-body-s')
 
    var data = pagination(state.querySet, state.page, state.rows)
    var myList = data.querySet
     
    for (var i = 0; i < myList.length; i++) {
        if(myList[i].news_url == ""){
            var row = 
            `
            <div class="news_sub_container" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1200">
                <div id="news_sub_img">
                    <a href="news_page.html?index=${myList[i].index}">
                        <img id="sub_img_set"src="https://nxnxapi.com/${myList[i].img_url}">  
                    </a>  
                </div>
                
                <div id="news_sub_title">
                    <a class="alink" href="news_page.html?index=${myList[i].index}">
                        <p>${myList[i].news_title}</p>
                    </a>
                </div>
            
                <div id="news_sub_editdate">
                    <p> ${myList[i].editdate}</p>
                </div>
            </div>
            `
            table.append(row)
    }else{
        var row = 
        `
        <div class="news_sub_container" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1200">
             <div id="news_sub_img">
                <a href="${myList[i].news_url}">
                    <img id="sub_img_set" src="https://nxnxapi.com/${myList[i].img_url}">  
                 </a>  
             </div>
 
             <div id="news_sub_title">
                <a class="blink" href="${myList[i].news_url}">
                    <p>${myList[i].news_title}</p>
                </a>
             </div>
             
             <div id="news_sub_editdate">
                 <p> ${myList[i].editdate}</p>
             </div>
 
        </div>
    `
        table.append(row)
    }
 }
    pageButtons(data.pages)
 }


  tableData()




  var isMobile = /Android|iPhone/i.test(navigator.userAgent)
  jQuery(document).ready(function($){
      if(!isMobile){
          //PC
      }else{
          //모바일
          document.getElementById("sub_newss").classList.remove('container');
          
      }
  });
