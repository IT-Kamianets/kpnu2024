import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import _projects from '../assets/projects-data.json';
import _students from '../assets/students-data.json';

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

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule],
})
export class AppComponent {
  projects = _projects as Projects[];
  students = _students as Student[];
}
