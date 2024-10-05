import "./style.css";
import { home, updateProjects} from "./home";
import { projectItem } from "./todoFunctions.js";

const initialLoader = (() => {
    const content = document.querySelector('main');
    const projects = [projectItem('Main Project')];
    home(projects, content);
    document.querySelector('#todoHome').showModal();
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
        console.log(initialLoader.projects);
    })

})()

