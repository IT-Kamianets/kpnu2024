// import _projects from './assets/projects-data.json';
// import _students from './assets/students-data.json';
 console.log(projects);

 /*
async function fetchData() {
  try {
      const response = await fetch('./assets/projects-data.json');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      generateHTML(data);
  } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
  }
}


function generateHTML(data) {
  const projectsCont = document.getElementById('project-list');

  _projects.forEach(project => {
    const div = document.createElement('div');
    div.className = 'project-card';
    div.innerHTML = '<h3> ${project.projectName} </h3>';

    projectsCont.appendChild(div);
  });
}*/