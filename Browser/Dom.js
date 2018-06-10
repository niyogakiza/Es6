
// const p = document.querySelector('p');
// p.remove(); // Removing the paragraph first paragraph

//All remove paragraph
// const ps = document.querySelectorAll('p');
// ps.forEach(function(p){
//     //p.textContent = 'New Text to replace the one in the paragraph';
//     //console.log(p.textContent);
//     //p.remove();
// });

const todos = [
    {
        text: 'Order cat food',
        completed: false
    },
    {
        text: 'Clean Kitchen',
        completed: true
    },
    {
        text: 'Buy food',
        completed: true
    },
    {
        text: 'Do work',
        completed: false
    },
    {
        text: 'Exercises',
        completed: true
    }

];
const incompleteTodos = todos.filter((todo) => {
    return todo.completed === false;
});

const summary = document.createElement('h4');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

todos.forEach((todo) => {
    const allTodos = document.createElement('p');
    allTodos.textContent = todo.text;
    document.querySelector('body').appendChild(allTodos);
});





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
        return note.title.toLowerCase().includes(filters.searchText);
    });
   filteredNotes.forEach((note) =>{
       const noteEl = document.createElement('h5');
       noteEl.textContent = note.title;
       document.querySelector('body').appendChild(noteEl);
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
    document.querySelectorAll('.note').forEach((note) => {
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

//







