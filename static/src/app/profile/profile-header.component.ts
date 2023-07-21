import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html'
})
export class ProfileHeaderComponent {
  skills: string[] = [
    'Power BI',
    'Tableau',
    'SQL',
    'Python',
    'Excel',
    'R Language',
    'Google DS',
    'Confluence',
    'Jira',
    'JavaScript',
    'Node JS',
    'HTML / CSS',
    'Draw.io',
    'Smart Draw',
    'Power Point',
    'Hadoop',
    'Angular JS',
    'MS Project',
    'Visio',
    'Lucid Chart'
  ];
}
