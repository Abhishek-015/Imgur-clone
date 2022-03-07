
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
showTags()

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

   showVirals()

