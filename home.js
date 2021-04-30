//To check if the javascript file has been properly connected to the main html file
console.log("CONNECTED!!!");


showNotes();


// If  the user adds a item, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";

    showNotes();
});



// Function to show all the items present in the localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);

    let html = "";

    //Creates a new card for every item and adds the code to the html
    notesObj.forEach(function(element, index) {
        html += `<div class="noteCard my-2 mx-2 card"
			style="width: 18rem;">
				<div class="card-body">
					<h5 class="card-title">
						Note ${index + 1}
					</h5>
					<p class="card-text">
						${element}
					</p>

				<button id="${index}" onclick=
					"deleteNote(this.id)"
					class="btn btn-primary">
					<i class="bi bi-journal-x"></i> Delete Item
				</button>
			</div>
		</div>`;
    });

    let notesElm = document.getElementById("notes");

    if (notesObj.length != 0) notesElm.innerHTML = html;

    // if no item is present in the storage
    else
        notesElm.innerHTML = `<h5><i class="bi bi-journal-code"></i> Nothing to show!
		Use "Add a New Item" section above to add notes.</h5>`;
}

// Function to delete an Item from the storage
function deleteNote(index) {
    let notes = localStorage.getItem("notes");

    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);

    notesObj.splice(index, 1);

    localStorage.setItem("notes",
        JSON.stringify(notesObj));

    showNotes();
}