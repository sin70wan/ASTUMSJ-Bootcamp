
const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

// to add task 
function addtask(){
       if (inputbox.value ===''){
          alert('enter task');
       }
          else{
    let li = document.createElement('li');
      li.innerHTML = inputbox.value;
      listcontainer.appendChild(li); 
      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      li.appendChild(span);
 }
   inputbox.value = "";

   savedata();
   updateTotalCount()
  }


  listcontainer.addEventListener("click",function(e){
   if(e.target.tagName ==="LI"){
      e.target.classList.toggle("checked");
      savedata();
   }
   else if(e.target.tagName ==="SPAN"){
      e.target.parentElement.remove();
      savedata();
      updateTotalCount()
   }
     
  } ,false);

  // local storage
  function savedata(){
   localStorage.setItem("data",listcontainer.innerHTML);

  }
  function showtask(){
   listcontainer.innerHTML = localStorage.getItem("data");
  }
  showtask();
  // total count
  function updateTotalCount() {
  const totalTasks = document.querySelectorAll("ul li").length;
  document.getElementById("total-count").innerText = totalTasks;
}

  
 

