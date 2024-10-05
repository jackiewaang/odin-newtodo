import { todoItem } from "./todoFunctions";

export const insideProject = (project) => {
    const content = document.querySelector('main');
    content.textContent = `${project.title}`;
    project.todos.forEach(t => {
        showNew(t, content);
    });

    const todoModal = document.querySelector('#todoModal');

    const openTodoBtn = document.createElement('button');
    openTodoBtn.textContent = 'Add a new task';
    openTodoBtn.addEventListener('click', () => {
        todoModal.showModal();
    })
    content.appendChild(openTodoBtn);

    const closeTodoBtn = document.querySelector('#closeTodoModal');
    closeTodoBtn.addEventListener('click', () => {
        todoModal.close();
    })

    const createTodoBtn = document.querySelector('#createTodo');
    createTodoBtn.addEventListener('click', () => {
        const title = document.querySelector('#todoTitle');
        const description = document.querySelector('#todoDescription');
        const duedate = document.querySelector('#todoDueDate');
        const priority = document.querySelector('#todoPriority');
        project.todos.push(todoItem(title.value, description.value, duedate.value, priority.value));
        title.value = '';
        description.value = '';
        duedate.value = '';
        priority.value = '';
        todoModal.close();
        showNew(project.todos.at(-1), content);
    })

    function showNew(todo, content){
        const todoElem = document.createElement('div');
        todoElem.innerHTML = `
            <p>${todo.title}</p>
            <p>${todo.description}</p>
            <p>${todo.dueDate}</p>
            <p>${todo.priority}</p>
        `
        content.appendChild(todoElem);
    }
}