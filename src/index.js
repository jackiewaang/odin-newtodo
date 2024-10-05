import "./style.css";
import { home, updateProjects} from "./home";
import { projectItem } from "./todoFunctions.js";

const initialLoader = (() => {
    const content = document.querySelector('main');
    const projects = [projectItem('Main Project')];
    home(projects, content);
    return {content, projects};
})()

const dialog = (() => {

    function update(){
        initialLoader.content.textContent = '';
    }
    
})()

