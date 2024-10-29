import _projects from './assets/projects-data.json'
import _students from './assets/students-data.json';

interface Projects {
  projectName: string;
  projectLink: string;
  projectDescription: string;
}

interface Student {
  studentName: string;
  profileLink: {
    gitHub: string;
    linkedIn: string;
    aboutPage: string;
  };
}

export class AppComponent {
  projects = _projects as Projects[];
  students = _students as Student[];
}
