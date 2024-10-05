import { todoItem } from "./todoFunctions";

export const insideProject = (project) => {
    const content = document.querySelector('main');
    content.textContent = '';
    const container = document.createElement('div');
    container.classList.add('flex','flex-col', 'justify-center', 'items-start')
    container.innerHTML = `
        <div class='text-4xl font-semibold p-3'>${project.title}</div>
    `
    content.appendChild(container);
    project.todos.forEach(t => {
        showNew(t, content);
    });

    const todoModal = document.querySelector('#todoModal');

    const openTodoBtn = document.createElement('button');
    openTodoBtn.innerHTML = `
        <svg class="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>`;
    openTodoBtn.classList.add('fixed', 'bottom-0','right-0', 'col-span-full', 'flex', 'justify-end', 'm-4', 'p-3', 'hover:bg-emerald-300', 'rounded-full');
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
        priority.value = 'High';
        todoModal.close();
        showNew(project.todos.at(-1), content);
    })

    function showNew(todo, content){
        const todoElem = document.createElement('div');
        todoElem.innerHTML = `
            <span class='text-2xl row-start-1 row-end-2'>${todo.title}</span>
            <span class=''>${todo.dueDate}</span>
            <div class='ml-auto flex row-start-1 row-end-3 gap-3'>
                <svg id='editBtn' class='w-10 h-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
                <svg id='deleteBtn' class='w-10 h-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
        `
        const priorityColor = changeColor(todo.priority);
        todoElem.classList.add('grid', 'grid-rows-2', 'p-3', 'items-center', 'rounded-lg', 'cursor-pointer', priorityColor, 'shadow-sm')
        content.appendChild(todoElem);

        todoElem.addEventListener('click', () => {
            const classlist = todoElem.classList;
            if(classlist.contains('line-through')){
                classlist.remove('line-through', 'bg-stone-100');
                classlist.add(changeColor(todo.priority));
            } else{
                classlist.remove(changeColor(todo.priority));
                classlist.add('line-through', 'bg-stone-100');
            }
        })
        
        // delete todo button
        const deleteBtn = todoElem.querySelector('#deleteBtn');
        deleteBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            project.remove(todo);
            content.removeChild(todoElem);
        })

        // edit todo button
    }

    function changeColor(priority){
        let color = '';
        if(priority === 'High'){
            color = 'bg-red-200'
        } else if(priority === 'Medium'){
            color = 'bg-amber-200';
        } else if(priority === 'Low'){
            color = 'bg-lime-200';
        }
        return color;
    }
}