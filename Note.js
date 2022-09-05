showNotes();
function clr(){
  document.getElementById("addText").value="";
}
function add(e){
let addtext = document.getElementById("addText");
let notes = localStorage.getItem("notes");
if(notes==null){
 notesObj = [];
}
else{
  notesObj = JSON.parse(notes);
}

notesObj.push(addtext.value);
localStorage.setItem("notes", JSON.stringify(notesObj));
addtext.value = "";
showNotes();
}

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == 0){
       notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);  
    }
    let html = "";
    notesObj.forEach(function(element,index){
        html += `
        <div class="row">
        <div class="card my-2 mx-5" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-primary">Note ${index + 1}</h5>
          <p class="card-text text-dark">${element}</p>
          <button href="#" id="${index}" class="btn btn-warning" onclick="deleteNote(this.id)">Delete</button>
        </div>
      </div>
      </div>
</div>
        `;
        
    });
    let notesElem = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = `<p class="mx-5 <h3 class="mx-5" style="font-family: times new roman;">
        Nothing to show ! Please add your note...</p>`
    }
}
showNotes();
function deleteNote(index) {
let notes = localStorage.getItem("notes");
if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }  
notesObj.splice(index,1);
localStorage.setItem("notes", JSON.stringify(notesObj));
showNotes();
}

let body = document.querySelector('body');
let customSwitch1 = document.querySelector('#customSwitch1');

customSwitch1.onclick = function(){
if(customSwitch1.checked==true){
  body.classList.add('darkMode');
}
else{
  body.classList.remove('darkMode');
}
}