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

    document.querySelector('#todos').innerHTML = '';

    filtered.forEach((todo) => {
        const allTodos = document.createElement('p');
        allTodos.textContent = todo.text;
        document.querySelector('#todos').appendChild(allTodos);
    });
};
filteredTodo(todos, searchTodo);

document.querySelector('#todo').addEventListener("input", function (e) {
    e.preventDefault();
    searchTodo.filters = e.target.value;
    filteredTodo(todos, searchTodo);
});

document.querySelector('#delete').addEventListener("click", function (e) {
    document.querySelectorAll('#todos').forEach((todo) => {
        todo.remove();
    })
});
const incompleteTodos = todos.filter((todo) => {
    return todo.completed === false;
});

const summary = document.createElement('h4');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

