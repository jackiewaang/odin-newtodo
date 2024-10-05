import {projectItem, todoItem} from "./todoFunctions.js";
import { insideProject } from "./insideProject.js";

export const home = (projects, content) => {

    projects.forEach(project => {
        if(project.title != ''){
            const projectElem = document.createElement('div');
            projectElem.innerHTML = `
            <div id='projectDiv'>
                <p class='text-lg font-normal cursor-pointer projectItem'>${project.title}</P>
            </div>
            <div id='right' class='flex gap-3'>
                <button class=>Edit</button>
                <button>Remove</button>
            </div>
            `
            projectElem.classList.add('flex', 'p-3', 'justify-between' );
            content.appendChild(projectElem);
            const projectPara = projectElem.firstElementChild.firstElementChild; // p 
            projectPara.addEventListener('click', () => {
                insideProject(project);
            })
            
        }
    })

    const createProject = document.createElement('div');
    createProject.innerHTML = `
    <button id='newProject' class='p-3 ml-3'> Create a new Project </button>
    `
    content.appendChild(createProject);

    // handle modal for creating new project
    const projectModal = document.querySelector('#projectModal');

    const openProject = document.querySelector('#newProject');
    openProject.addEventListener('click', () => {
        projectModal.showModal();
    })

    const closeProject = document.querySelector('#closeProjectModal');
    closeProject.addEventListener('click', () => {
        projectModal.close();
    })

    const makeProject = document.querySelector('#createProject');
    makeProject.addEventListener('click', () => {
        const title = document.querySelector('#projectTitle').value;
        projects.push(projectItem(title));
        document.querySelector('#projectTitle').value = '';
        projectModal.close();
        console.log(projects);
        content.textContent = '';
        home(projects, content);
    })
}

//create hashmap to find project item from projects 
