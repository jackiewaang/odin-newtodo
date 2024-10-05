import {projectItem, todoItem} from "./todoFunctions.js";
import { insideProject } from "./insideProject.js";

export const home = (projects, content) => {

    projects.forEach(project => {
        if(project.title !== ''){
            showNewProject(project, content);
        }
    })

    const createProject = document.createElement('button');
    createProject.innerHTML = `
        <svg class="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>  `
    createProject.id = 'newProject';
    createProject.classList.add('fixed','bottom-0', 'right-0', 'col-span-full', 'flex', 'justify-end', 'm-4', 'p-3', 'hover:bg-emerald-300', 'rounded-full');
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
        if(title.trim() !== ""){
            projects.push(projectItem(title));
            document.querySelector('#projectTitle').value = '';
            projectModal.close();
            showNewProject(projects.at(-1), content);
        }
    })

    function showNewProject(project, content){
        const projectElem = document.createElement('div');
        projectElem.innerHTML = `
        <div id='projectDiv'>
            <p class='text-lg font-normal cursor-pointer projectItem'>${project.title}</P>
        </div>
        <div id='right' class='flex gap-3'>
            <button type='button' id='editProjectBtn'>Edit</button>
            <button type='button' id='removeProjectBtn'>Remove</button>
        </div>
        `
        projectElem.classList.add('flex', 'p-3', 'justify-between' );
        content.appendChild(projectElem);
        // click title of project
        const projectPara = projectElem.firstElementChild.firstElementChild; // p 
        projectPara.addEventListener('click', () => {
            insideProject(project);
        })

        // handle edit button
        const editBtn = projectElem.querySelector('#editProjectBtn');
        editBtn.addEventListener('click', () => {
            openEditModal(project, projectPara);
        })
        
        // remove project
        const removeBtn = projectElem.querySelector('#removeProjectBtn');
        removeBtn.addEventListener('click', () => {
            const index = projects.indexOf(project);
            projects.splice(index, 1);
            content.removeChild(projectElem);
        })
    }

    function openEditModal(project, projectPara){
        const editModal = document.querySelector('#editProject');
        editModal.showModal();

        const newTitleInput = document.querySelector('#projectNewTitle');
        newTitleInput.value = project.title;

        const cancelBtn = document.querySelector('#closeEditProject');
        cancelBtn.addEventListener('click', () => {
            editModal.close();
        })

        const confirmEditBtn = document.querySelector('#submitEditProject');
        confirmEditBtn.addEventListener('click', () => {
            const newTitle = newTitleInput.value.trim();
            if(newTitle){
                project.title = newTitle;
                projectPara.textContent = newTitle;
            }
            editModal.close();
        }, {once:true});
    }
}

