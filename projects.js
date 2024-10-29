const projects = [
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


function generateHTML(projects) {
  const projectsCont = document.getElementById('project-list');

  _projects.forEach(project => {
    const div = document.createElement('div');
    div.className = 'project-card';
    div.innerHTML = '<h3> ${projects.projectName} </h3>';

    projectsCont.appendChild(div);
  });
}