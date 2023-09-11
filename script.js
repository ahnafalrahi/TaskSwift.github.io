const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addtask(){
    if(inputBox.value ===""){
        alert("you must write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML= "\u00d7";
        li.appendChild(span)
    }
    inputBox.value=""
    saveData();
}

listcontainer.addEventListener("click",function(check){
    if(check.target.tagName==="LI"){
        check.target.classList.toggle("checked");
        saveData();
    }
    else if(check.target.tagName==="SPAN"){
        check.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
    
}
showTask()

gsap.to(".nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: ".nav",
      scroller: "body",
    //   markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub:1,
    },
  });

//   function addParagraph() {
//     var text = document.getElementById("input").value;
//     var paragraph = document.createElement("list-container");
//     paragraph.innerHTML = text;
//     paragraph.style.width = "100%";
//     paragraph.style.overflow = "auto";
//     document.body.appendChild(paragraph);
//   }
  
//   document.getElementById("button").addEventListener("click", addParagraph);
