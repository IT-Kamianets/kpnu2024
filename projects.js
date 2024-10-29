const projectsData = [
  {
    "projectName": "TrustyConvert",
    "projectLink": "https://github.com/IT-Kamianets/trustyconvert",
    "projectDescription": "Короткий опис проєкту"
  },
  {
    "projectName": "Timer",
    "projectLink": "https://github.com/IT-Kamianets/timer",
    "projectDescription": "Короткий опис проєкту"
  },
  {
    "projectName": "WeatherSense",
    "projectLink": "https://github.com/IT-Kamianets/weathersense",
    "projectDescription": "Короткий опис проєкту"
  },
  {
    "projectName": "TodoList",
    "projectLink": "https://github.com/IT-Kamianets/todo",
    "projectDescription": "Короткий опис проєкту"
  },
  {
    "projectName": "CalorieTracker",
    "projectLink": "https://github.com/IT-Kamianets/calorietracker",
    "projectDescription": "Короткий опис проєкту"
  },
  {
    "projectName": "HabitTracker",
    "projectLink": "https://github.com/IT-Kamianets/habittracker",
    "projectDescription": "Короткий опис проєкту"
  }
]

console.log(projectsData)


function generateHTML(projectsData) {
  const projectsCont = document.getElementById('project-list');

  projectsData.forEach(project => { // Змінено 'projects' на 'projectsData'
      const div = document.createElement('div');
      div.className = 'project-card';
      div.innerHTML = `<h3>${project.projectName}</h3> <!-- Змінено 'projectsData' на 'project' -->
                       <p>${project.projectDescription}</p>
                       <a href="${project.projectLink}" target="_blank">Перейти до проєкту</a>`;

      projectsCont.appendChild(div);
  });
}

// Викликаємо функцію для генерації HTML
generateHTML(projects);
