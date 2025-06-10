import { Component } from '@angular/core';
import { OriginLayout } from './origin-layout/origin-layout';
import { TEAM_MEMBERS } from './data/personne.data';


@Component({
  selector: 'app-root',
  imports: [OriginLayout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'brief-contact-a';
  personne = TEAM_MEMBERS;
}