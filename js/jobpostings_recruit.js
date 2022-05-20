var state={
    querySet: '',
}


function tableDataa (){
    
    $.ajax({
        url: 'https://www.nxnxapi.com/employment/employment_all.do',
        dataType: 'json',
        type: 'GET',
        })
        .done(function(data){ 
            console.log("data :",data);
            var row_length = "";
            for(var i=0; i<data.employment_data.length; i++){
                row_length = data.employment_data.length;
            }
            
             state = {
                querySet: data.employment_data,
 
                page: 1,
                rows: row_length,
                window: 10,
            } 
            buildTablea();
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
function buildTablea() {
    var table = $('#job_menu')
 
    var data = pagination(state.querySet, state.page, state.rows)
    var myList = data.querySet
     
    for (var i = 0; i < myList.length; i++) {
        if(myList[i].emp_state == [""]){
            console.log("emp_state :",myList[i].emp_state);
            var row = 
            `
            <div class="col-6 col-sm-4 col-md-4 job-posting" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="900">
            <a href="${myList[i].emp_url}" target="_blank" rel="noopener noreferrer">
                
            <div>
                  <img src="https://nxnxapi.com/${myList[i].img_list[0].url}" class="gallery-item" alt="gallery">

                    <div class="job-posting-desc"> 
                        <div class="jpost-status-fis"></div>
                        <div class="jpost-title">${myList[i].emp_proj_name}</div>
                        <div class="jpost-hashtag">${myList[i].emp_search}</div>
                    </div> 
            </div>
            </a>
          </div>
            `

            table.append(row)
        }else if(myList[i].emp_state == ["서비스"]) {
            console.log("emp_state :",myList[i].emp_state);
            var row = 
            `
            <div class="col-6 col-sm-4 col-md-4 job-posting" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="900">
            <a href="${myList[i].emp_url}" target="_blank" rel="noopener noreferrer">
                
            <div>
                  <img src="https://nxnxapi.com/${myList[i].img_list[0].url}" class="gallery-item" alt="gallery">

                    <div class="job-posting-desc"> 
                        <div class="jpost-status-service">${myList[i].emp_state}</div>
                        <div class="jpost-title">${myList[i].emp_proj_name}</div>
                        <div class="jpost-hashtag">${myList[i].emp_search}</div>
                    </div> 
            </div>
            </a>
          </div>
            `

            table.append(row)
        }else if(myList[i].emp_state == ["개발중"]) {
            console.log("emp_state :",myList[i].emp_state);
            var row = 
            `
            <div class="col-6 col-sm-4 col-md-4 job-posting" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="900">
            <a href="${myList[i].emp_url}" target="_blank" rel="noopener noreferrer">
                
            <div>
                  <img src="https://nxnxapi.com/${myList[i].img_list[0].url}" class="gallery-item" alt="gallery">

                    <div class="job-posting-desc"> 
                        <div class="jpost-status">${myList[i].emp_state}</div>
                        <div class="jpost-title">${myList[i].emp_proj_name}</div>
                        <div class="jpost-hashtag">${myList[i].emp_search}</div>
                    </div> 
            </div>
            </a>
          </div>
            `

            table.append(row)
        }
        
    


           
           
            /*************************************************************************************/
            
            }
/*************************************************************************************/



    

}
 tableDataa()

