
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
 
                page: 1,
                rows: 3,
                window: 10,
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


function buildTable() {
    var qrq = $('#table-body-mm')
 
    var data = pagination(state.querySet, state.page, state.rows)
    var myList = data.querySet
     
    for (var i = 0; i < myList.length; i++) {
            var als = 
            `
            <div class='swiper-slide MainNewsSlide-item'>
            <div class='DefaultPost'>
                <a href='news_page.html?index=${myList[i].index}' class='DefaultPost-link'>
                    <div class='DefaultPostThumnail'>
                        <span class='DefaultPostThumnail-inner'>
                            <img class='DefaultPostThumnail-img lazy' src="https://nxnxapi.com/${myList[i].img_url}"/>
                        </span>
                    </div>
                    <div class='DefaultPostCont'>
                        <h4 class='DefaultPostCont-title'>
                            <span class='DefaultPostCont-text'>
                            <a class="alink" href="news_page.html?index=${myList[i].index}">
                            <p class="b-title">${myList[i].news_title}</p>
                        </a>
                            </span>
                        </h4>
                        <div class='DefaultPostCont-date'>
                            <div id="news_sub_editdate">
                                <p> ${myList[i].editdate}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
          </div>
            `
            qrq.append(als)
 }
  
 }

 tableData()



 
