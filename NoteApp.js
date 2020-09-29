console.log("This is Notes Magics");
showNotes();
// 
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function() {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    // let titletxt = document.getElementById('titletxt');
    // console.log(titletxt);
    // let title = titletxt.value;
    // titletxt.value = "";
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    // notesobj.push();
    localStorage.setItem('notes', JSON.stringify(notesobj));
    // addtxt.value = "";
    // console.log(notesobj);
    // console.log(title);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem('notes')
    let notesobj;
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function(element, index) {
        html += `
        <div class="mx-2 my-2 noteCard">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
                </div>
            </div>`
    });
    let notesElm = document.getElementById('notes');
    if (notesElm.length != 0) {
        notesElm.innerHTML = html;

    } else {
        notesElm.innerHTML = `Nothing To Show Please "Add A Note".`;
    }
}

function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);

    localStorage.setItem('notes', JSON.stringify(notesobj));
    showNotes();

    console.log('Deleting...')

}
let searchText = document.getElementById("searchText")
searchText.addEventListener('input', function() {
        let inputval = searchText.value.toLowerCase();
        // let inputval = searchText.value
        let noteCards = document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function(element) {
            let cardTxt = element.getElementsByTagName('p')[0].innerText;
            if (cardTxt.includes(inputval)) {
                element.style.display = "block";
            } else {
                element.style.display = "none";

            }

        })

    })
    // console.log(titletxt)