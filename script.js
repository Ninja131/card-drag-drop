const color = document.querySelector('#color');
const button = document.querySelector('#btn');
const list = document.querySelector('#list');


button.addEventListener("click",()=>{
     const note = document.createElement("div");
     note.classList.add("note");
     note.innerHTML = `<span class="close">X</span>
                <textarea placeholder="Write Content..." rows="10" cols="30"></textarea>`;
     list.appendChild(note);
     note.style.padding = '10px';
     note.style.borderColor = color.value;

     deleteNote(note);
     
});



//delete list function
function deleteNote(note){
    note.addEventListener("click",(e)=>{
       if(e.target.classList.contains('close')){
          note.remove();
       }
    })
}



let cursor = {
     x: null,
     y: null
}

let note1 = {
     dom: null,
     x: null,
     y: null
}


let zIndexCounter = 1;
console.log(zIndexCounter);


document.addEventListener("mousedown",(e)=>{
     if(e.target.classList.contains("note")){
          zIndexCounter++;
          e.target.style.zIndex = zIndexCounter;
          console.log(zIndexCounter);
          cursor.x = e.clientX;
          cursor.y = e.clientY;

          note1.dom = e.target;
          note1.x = e.target.getBoundingClientRect().left;
          note1.y = e.target.getBoundingClientRect().top; 

     }
})

document.addEventListener("mousemove",(e)=>{
     if(note1.dom !== null){
         
          let currentCursor = {
               x: e.clientX,
               y: e.clientY
          }

          let distance = {
               x: currentCursor.x - cursor.x,
               y: currentCursor.y - cursor.y
          }

          let distanceMove ={
               x: note1.x + distance.x,
               y: note1.y + distance.y
          }
     
          note1.dom.style.left = distanceMove.x + 'px';
          note1.dom.style.top = distanceMove.y + 'px';


     }
});


document.addEventListener("mouseup",(e)=>{
     e.target.classList.remove('zIndex');  
     note1.dom = null;
     
});