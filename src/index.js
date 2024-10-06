import "./style.css";
import { home, updateProjects} from "./home";
import { projectItem } from "./todoFunctions.js";

const initialLoader = (() => {
    const content = document.querySelector('main');
    let projects = [];
    if(localStorage.getItem('projects') === null || JSON.parse(localStorage.getItem('projects')).length === 0){
        projects.push(projectItem('Main Project'));
        localStorage.setItem('projects', JSON.stringify(projects));
    } else{
        projects = JSON.parse(localStorage.getItem('projects'));
    }
    home(projects, content);
    return {content, projects};
})()

const sidebarPages = (() => {

    function update(){
        initialLoader.content.textContent = '';
    }

    const projectsBtn = document.querySelector('#projectsBtn');
    projectsBtn.addEventListener('click', () => {
        update();
        home(initialLoader.projects, initialLoader.content);
    })
})()

