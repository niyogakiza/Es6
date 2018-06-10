
// const p = document.querySelector('p');
// p.remove(); // Removing the paragraph first paragraph

//All remove paragraph
// const ps = document.querySelectorAll('p');
// ps.forEach(function(p){
//     //p.textContent = 'New Text to replace the one in the paragraph';
//     //console.log(p.textContent);
//     //p.remove();
// });





// const notes = [
//     {
//         title: 'my next trip',
//         body: 'I would like to go to Spain'
//     },
//     {
//         title: 'Habbits to work on',
//         body: 'Exercise. Eating a bit better'
//     },
//     {
//         title: 'Office modification',
//         body: 'Get a new seat'
//     }
//
// ];

let notes = [];

const filters = {
    searchText: ''
};

// const noteJson = JSON.stringify(notes);
// console.log(noteJson);
// localStorage.setItem('notes', noteJson);

const noteJson = localStorage.getItem('notes');

if(noteJson !== null){
    notes = JSON.parse(noteJson);
}
// const note = JSON.parse(noteJson); // the data must be stored before
// console.log(`${note.text} is ${note.body}`);

//localStorage.setItem('location', 'Birmigham');
//localStorage.getItem('location');
//localStorage.removeItem('location');
//localStorage.clear();

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter((note) =>{
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.querySelector('#notes').innerHTML = '';

   filteredNotes.forEach((note) =>{
       const noteEl = document.createElement('p');

       if(note.title.length > 0){
           noteEl.textContent = note.title;
       } else {
           noteEl.textContent = 'Unnamed note'
       }
       document.querySelector('#notes').appendChild(noteEl);
   })
};
renderNotes(notes, filters);

document.querySelector('#addAll').addEventListener("click", (e) => {
    notes.push({
        title:'',
        body: ''
    });
    localStorage.setItem('notes', JSON.stringify('notes'));
    renderNotes(notes, filters)
});
document.querySelector('.input').addEventListener("input", (e) =>{
   filters.searchText = e.target.value;
    renderNotes(notes, filters)
});
document.querySelector('#removeAll').addEventListener("click", () => {
    document.querySelectorAll('#notes').forEach((note) => {
        note.remove();
    })
});


const p = document.querySelectorAll('p');
p.forEach((p) => {
   if( p.textContent.includes('The')){
       p.remove();
   }
});

// Add a New Element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new element we added';
document.querySelector('body').appendChild(newParagraph);

//form
document.querySelector('#inputName').addEventListener('submit', function(e){
    e.preventDefault();
    e.target.elements.name.value = '';
});

document.querySelector('#gridRadios1').addEventListener('change', function (e) {
    e.target.checked
});

document.querySelector('#filter-by').addEventListener('change', function(e){

});








