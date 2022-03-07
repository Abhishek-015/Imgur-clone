
async function showTags(){
 let res = await fetch(
    `https://api.unsplash.com/search/photos?query=london&client_id=ERaqzjfKJiqyDoOTa3WsgaOiBujjJLtUSIDSB2CtfW4`
  )
    var data = await res.json()
   var details =  data.results.filter((el,index)=>index<9).map(el=>{
        console.log(el)
       return ` <div class="card">
            <div class="card-img pic">
              <img
                src="${el.urls.raw}"
                alt=""
              />
            </div>
            <div class="desc">
              <h4>${el.user.name}</h4>
              <p>${el.likes} posts</p>
            </div>
          </div>`
    })
   
    

    const showData = document.getElementById("active-tags")
    showData.innerHTML = details

};
// showTags()

async function showVirals(){
    let res = await fetch(
       `https://picsum.photos/v2/list`
     )
       var data = await res.json()
      var details =  data.map(el=>{
           console.log(el)
          return ` <div class="card-viral">
               <div class="imgViral">
                 <img
                   src="${el.download_url}"
                   alt=""
                 />
               </div>
               <div class="desc-viral">
                 <h4>${el.author}</h4>
                 <p>${el.height} posts</p>
               </div>
             </div>`
       })
      
       
   
       const showData = document.getElementById("viral-tags")
       showData.innerHTML = details
   
   };

//    showVirals()


   //debouncing
   var timer
   var appendDataDiv = document.getElementById("list")

   function appendData(data) {
       if(data.results.length>0){
           appendDataDiv.style.display="block"
       }
       console.log(data.results)
       data.results.filter((el,ind)=>ind<20).map(el=>{
           let para = document.createElement("p")
           para.innerHTML=el.user.name
           appendDataDiv.append(para)
       })
   }

   async function searchData(keyword){
       let res = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=ERaqzjfKJiqyDoOTa3WsgaOiBujjJLtUSIDSB2CtfW4`)
       const data = await res.json()
         return data
   }

   async function deb(keyword){
       if(keyword===""){
           appendDataDiv.style.display="none"
       }
        const data = await searchData(keyword)
        appendData(data)
    }
    
    function debounce(deb,delay){
        appendDataDiv.innerHTML=""
        var keyword = document.getElementById("input").value
        if(timer){
            clearTimeout(timer)
        }
       timer = setTimeout(()=>{
           deb(keyword)
       },delay)
   }
//    debounce(deb,delay)

