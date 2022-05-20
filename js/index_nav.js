
var alas={
    querySet: '',
}

function tableData (){
    
    $.ajax({
        url: 'https://nxnxapi.com/gameproject/game_top_nav.do',
        dataType: 'json',
        type: 'GET',
        })
        .done(function(data){
            
             alas = {
                querySet: data.game_nav_data,
 
                page: 1,
                rows: 3,
                window: 10,
            } 
            console.log("hi",data);
            buildTable();
        })
    }

    console.log("hi");
    
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
console.log("bye");


function buildTable() {
    var table = $('#submenu_con11')
 
    var data = pagination(alas.querySet, alas.page, alas.rows)
    var myList = data.querySet
     
    for (var i = 0; i < myList.length; i++) {
            var table = 
            `
            <
            <ul>
                <li class="sub_item"> hi </li>
                <li class="sub_item"> hi </li>
                <li class="sub_item"> hi </li>
                <li class="sub_item"> hi </li>
                <li class="sub_item"> hi </li>
                <li class="sub_item"> hi </li>
                <li class="sub_item"> hi </li>
            </ul>

            `
            table.append(wwr)
 }
  
    pageButtons(data.pages)
 }

 tableData()

 console.log("ok");


