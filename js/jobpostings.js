
var state={
    querySet: '',
}
function tableData (){
    
    $.ajax({
        url: 'https://nxnxapi.com/comment/comment_all.do',
        dataType: 'json',
        type: 'GET',
        })
        .done(function(data){
            
             state = {
                querySet: data.comment_data,
 
                page: 1,
                rows: 5,
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
    var table = $('#post-wrapper2')
 
    var data = pagination(state.querySet, state.page, state.rows)
    var myList = data.querySet

    $('#post-wrapper2').slick({

        nextArrow:$('#next'),
        prevArrow:$('#prev'),
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,

        /*
        responsive:[
            {breakpoint: 767,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]*/
      });

for (var i = 0; i < myList.length; i++) {

if(myList[i].state == 1){
    
    var row = 

       
    `
    <div class="post">
        <img class="careers_img01_mobile" src="./images/careers/careers_img01.svg"> 
        <p class="com_coment">${myList[i].com_content}</p>
        <p class="com_name">${myList[i].com_name}</p>
    </div> ` 

     table.append(row)
}else if(myList[i].state == 2){
    var row = 
    `
    <div class="post">
    <img class="careers_img02_mobile" src="./images/careers/careers_img02.svg"> 
        <p class="com_coment">${myList[i].com_content}</p>
        <p class="com_name">${myList[i].com_name}</p>
    </div> 
    `
    table.append(row)
}else if(myList[i].state == 3){
    var row = 
    `
    <div class="post">
    <img class="careers_img03_mobile" src="./images/careers/careers_img03.svg"> 
        <p class="com_coment">${myList[i].com_content}</p>
        <p class="com_name">${myList[i].com_name}</p>
    </div> 
    `
    table.append(row)
}else if(myList[i].state == 4){
    var row = 
    `
    <div class="post">
    <img class="careers_img04_mobile" src="./images/careers/careers_img04.svg"> 
        <p class="com_coment">${myList[i].com_content}</p>
        <p class="com_name">${myList[i].com_name}</p>
    </div>  
    `
    table.append(row)
}else if(myList[i].state == 5){
    var row = 
    `
    <div class="post">
    <img class="careers_img05_mobile" src="./images/careers/careers_img05.svg"> 
        <p class="com_coment">${myList[i].com_content}</p>
        <p class="com_name">${myList[i].com_name}</p>
    </div>
    `
    table.append(row)
}
$("#post-wrapper2").slick("refresh")
 }
    pageButtons(data.pages)
 }

 tableData()
 
