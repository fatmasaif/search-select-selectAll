
//select All /Deselect All
let selectAll=document.querySelector('#checkbox');
// console.log(selectAll.checked);
let select=document.querySelectorAll(".checkbox1");
// // debugger;
// console.log(select);
selectAll.addEventListener('click',()=>{
    for(let i=0;i< select.length;i++){
        if(selectAll.checked){
            select[i].checked=true;
            // console.log("cc");
        }
          else{
            select[i].checked=false;
            // console.log("ff");
       
          } 
        
         }
})
//searching 
  let search=document.querySelector('#input-search');
    search.addEventListener('input',handlSearch);
    function handlSearch(event){
       let value=event.currentTarget.value;
       if(value){
          for(let i=0;i< select.length;i++){
            let word = select[i].nextElementSibling.textContent;
            let matches = word.toLowerCase().includes(value.toLowerCase());
                    if (matches) {
                      select[i].parentElement.classList.remove("hidden")
                    } else {
                      select[i].parentElement.classList.add("hidden")

                    }
          }

       }
    }





  //  for(let i=0;i< select.length;i++){
  //      if(search.value){
  //       if(select[i].nextElementSibling.textContent===search.value){
  //           select[i].nextElementSibling.style.display = "";
  //          }else{
  //           select[i].nextElementSibling.style.display = "none";
  //          }
  //      }
       
  //  }
      
