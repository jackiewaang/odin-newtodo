import { compareAsc, format} from "date-fns";

export const projectItem = (title) => {
    let todos = []; // array containing all todos of the project

    const add = (todo) => todos.push(todo);
    const remove = (todo) => {
        let index = todos.findIndex(t => t.title === todo.title);
        if(index >= 0){
            todos.splice(index, 1);
        }
    }
    return {add, remove, todos, title};
}

export const todoItem = (title, description, dueDate, priority) => {
    // button will call changeComplete
    let isCompleted = false;
    const changeComplete = () => isCompleted ? false : true;

    return {title, description, dueDate, priority, changeComplete};
}