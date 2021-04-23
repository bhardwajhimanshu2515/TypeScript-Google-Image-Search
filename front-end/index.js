var targetName=document.getElementById("targetName");
        var searchImage=document.getElementById("searchImage");
        var resultDIV=document.getElementById("result");

        //add event on btn
        searchImage.addEventListener("click",function(e){
            e.preventDefault();

            //api url
            let url="http://localhost:8081/"+targetName.value;

            //fetch
            fetch(url,{
                method:"GET"
            })
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                console.log(data.image_results);
                renderList(data.image_results);
            })
            .catch(err=>{
                console.log(err);
            })
        })
        
        //renderList function here
        function renderList(resultArray){
            console.log("hello");
            let res="";
            for(let i=0;i<resultArray.length;i++){
                console.log(i);
                let single=resultArray[i];
                let html=`  <div class="content">
                                <img src=${single.image.src}></img>
                            </div>`;
                res+=html;
            }
            console.log(res);
            resultDIV.innerHTML=res;
            console.log(resultDIV)
        }