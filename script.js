const projectsData = [
  {
    "projectName": "TrustyConvert",
    "projectLink": "https://github.com/IT-Kamianets/trustyconvert",
    "pageLink": "https://trustyconvert.itkamianets.com/",
    "projectDescription": "Короткий опис проєкту"
  },
  {
    "projectName": "Timer",
    "projectLink": "https://github.com/IT-Kamianets/timer",
    "pageLink": "https://timer.itkamianets.com/",
    "projectDescription": "Короткий опис проєкту"
  },
  {
    "projectName": "WeatherSense",
    "projectLink": "https://github.com/IT-Kamianets/weathersense",
    "pageLink": "https://weathersense.itkamianets.com/",
    "projectDescription": "Короткий опис проєкту"
  },
  {
    "projectName": "TodoList",
    "projectLink": "https://github.com/IT-Kamianets/todo",
    "pageLink": "https://todo.itkamianets.com/",
    "projectDescription": "Короткий опис проєкту"
  },
  {
    "projectName": "CalorieTracker",
    "projectLink": "https://github.com/IT-Kamianets/calorietracker",
    "pageLink": "http://calorietracker.itkamianets.com/",
    "projectDescription": "Короткий опис проєкту"
  },
  {
    "projectName": "HabitTracker",
    "projectLink": "https://github.com/IT-Kamianets/habittracker",
    "pageLink": "http://habittracker.itkamianets.com/",
    "projectDescription": "Короткий опис проєкту"
  },
  {
    "projectName": "RecipiesBook",
    "projectLink": "https://github.com/IT-Kamianets/recipiesbook",
    "pageLink": "",
    "projectDescription": "Короткий опис проєкту"
  },
  {
    "projectName": "Chat App",
    "projectLink": "https://github.com/IT-Kamianets/chatapp",
    "pageLink": "https://chatapp.itkamianets.com/",
    "projectDescription": "Короткий опис проєкту"
  },
  {
    "projectName": "Currency Converter",
    "projectLink": "https://github.com/IT-Kamianets/currencyconverter",
    "pageLink": "https://currencyconverter.itkamianets.com/",
    "projectDescription": "Короткий опис проєкту"
  }
]

const studentsData = [
  {
    "studentName": "Олександр Мрачковський",
    "profileLink": {
      "gitHub": "https://github.com/MrachkovskyiOleksandr",
      "linkedIn": "https://www.linkedin.com/in/oleksandr-mrachkovskyi/",
      "aboutPage": "https://oleksandrmrachkovskyi.itkamianets.com/"
    }
  },
  {
    "studentName": "Максим Сас",
    "profileLink": {
      "gitHub": "https://github.com/maksimkaSAS",
      "linkedIn": "https://linkedin.com/in/student2",
      "aboutPage": "https://maksymsas.itkamianets.com/"
    }
  },
  {
    "studentName": "Роман Столяр",
    "profileLink": {
      "gitHub": "https://github.com/romanstoliar",
      "linkedIn": "https://linkedin.com/in/student3",
      "aboutPage": "https://romanstoliar.itkamianets.com/"
    }
  },
  {
    "studentName": "Іван Козловський",
    "profileLink": {
      "gitHub": "https://github.com/IvanKozlovky",
      "linkedIn": "https://linkedin.com/in/student2",
      "aboutPage": "https://ivankozlovsky.itkamianets.com/"
    }
  },
  {
    "studentName": "Павло Іжицький",
    "profileLink": {
      "gitHub": "https://github.com/izhytskyi",
      "linkedIn": "https://linkedin.com/in/student3",
      "aboutPage": "https://pavloizhytskyi.itkamianets.com/",
      "telegram": "https://t.me/ixhxtxkxi"
    }
  },
  {
    "studentName": "Максим Білоус",
    "profileLink": {
      "gitHub": "https://github.com/BilousMaks",
      "linkedIn": "https://linkedin.com/in/student2",
      "aboutPage": "https://maksymbilous.itkamianets.com/"
    }
  },
  {
    "studentName": "Анна Собачинська",
    "profileLink": {
      "gitHub": "https://github.com/Sobachynska",
      "linkedIn": "https://linkedin.com/in/student3",
      "aboutPage": "https://annasobachynska.itkamianets.com/"
    }
  }
]


const projectsCont = document.getElementById('project-list');
const studentsCont = document.getElementById('student-list');

projectsData.forEach(project => {
  const projectsDiv = document.createElement('div');
  projectsDiv.className = 'project-card';
  projectsDiv.innerHTML = `<h3>${project.projectName}</h3>
          <p>${project.projectDescription}</p>
          <a href="${project.projectLink}" target="_blank">GiHub проєкту</a>
          <a href="${project.pageLink}" target="_blank">Сайт проєкту</a>`;

  projectsCont.appendChild(projectsDiv);
});

studentsData.forEach(student => {
  const studentsDiv = document.createElement('div');
  studentsDiv.className = 'student-card';
  studentsDiv.innerHTML = `<h3>${student.studentName}</h3>
          <div class="links">
          <a href=${student.profileLink.gitHub} target="_blank">GitHub</a>
          <a href=${student.profileLink.linkedIn} target="_blank">LinkedIn</a>
          <a href=${student.profileLink.aboutPage} target="_blank">About</a>
          <a href=${student.profileLink.telegram} target="_blank">Telegram</a>
          </div>`
  studentsCont.appendChild(studentsDiv);
})
