
// const p = document.querySelector('p');
// p.remove(); // Removing the paragraph first paragraph

//All remove paragraph
// const ps = document.querySelectorAll('p');
// ps.forEach(function(p){
//     //p.textContent = 'New Text to replace the one in the paragraph';
//     //console.log(p.textContent);
//     //p.remove();
// });





const notes = [
    {
        title: 'my next trip',
        body: 'I would like to go to Spain'
    },
    {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better'
    },
    {
        title: 'Office modification',
        body: 'Get a new seat'
    }

];

const filters = {
    searchText: ''
};
const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter((note) =>{
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.querySelector('#notes').innerHTML = '';

   filteredNotes.forEach((note) =>{
       const noteEl = document.createElement('p');
       noteEl.textContent = note.title;
       document.querySelector('#notes').appendChild(noteEl);
   })
};
renderNotes(notes, filters);

document.querySelector('#addAll').addEventListener("click", (e) => {


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








