import _projects from './assets/projects-data.json';
import _students from './assets/students-data.json';



const projectsCont = document.getElementsByClassName('project-list');

_projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'project-card';
  div.innerHTML = '<h3>${ project.projectName }</h3>';

  projectsCont.appendChild(div);
})
