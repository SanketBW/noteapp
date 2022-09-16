showNotes();
function clr(){
  document.getElementById("addText").value="";
}
function add(e){
let addtext = document.getElementById("addText");
let addTitle = document.getElementById("addTitle");
let notes = localStorage.getItem("notes");
if(notes==null){
 notesArr = [];
}
else{
  notesArr = JSON.parse(notes);
}
let NoteObj = {
    title :addTitle.value,
    text : addtext.value,
  }
if(addtext.value==""){
alert("Please add Title & Some Notes !")
}
  else{
notesArr.push(NoteObj);
localStorage.setItem("notes", JSON.stringify(notesArr));
 addTitle.value = "";
 addtext.value = "";
showNotes();
  }
}

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == 0){
       notesArr = [];
    }
    else{
        notesArr = JSON.parse(notes);  
    }
    let html = "";
    notesArr.forEach(function(element,index){
        html += `
        <div class="row">
        <div class="card my-2 mx-5" style="width: 18rem; font-family: times new roman;">
        <div class="card-body">
          <h5 class="card-title text-primary">Note-${index+1} : ${element.title}</h5>
          <p class="card-text text-dark">${element.text}</p>
          <button href="#" id="${index}" class="btn btn-warning" onclick="deleteNote(this.id)">Delete</button>
        </div>
      </div>
      </div>
</div>
        `;
        
    });
    let notesElem = document.getElementById('notes');
    if(notesArr.length != 0){
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
    notesArr = [];
  } else {
    notesArr = JSON.parse(notes);
  }  
notesArr.splice(index,1);
localStorage.setItem("notes", JSON.stringify(notesArr));
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
