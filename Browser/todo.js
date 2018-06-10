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
const searchTodo = {
    filters: ''
};

const filteredTodo = function(todos, searchTodo){
    const filtered = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchTodo.filters.toLowerCase());
    });

    const incompleteTodos = todos.filter((todo) => {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';

    const summary = document.createElement('h4');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);

    filtered.forEach((todo) => {
        const allTodos = document.createElement('p');
        allTodos.textContent = todo.text;
        document.querySelector('#todos').appendChild(allTodos);
    });

};
filteredTodo(todos, searchTodo);

document.querySelector('#todo').addEventListener("input", function (e) {
    searchTodo.filters = e.target.value;
    filteredTodo(todos, searchTodo);
});


document.querySelector('#newTodo').addEventListener('submit', function(e){
    e.preventDefault();
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    });
    filteredTodo(todos, searchTodo);
    e.target.elements.text.value = '';
});

document.querySelector('#remove').addEventListener("click", function () {
    document.querySelectorAll('#todos').forEach((todo)=>{
        todo.remove();
    })
});



