import { Component } from '@angular/core';
import { OriginLayout } from './origin-layout/origin-layout';
import { TEAM_MEMBERS } from './data/personne.data';
import { Footer } from './footer/footer';



@Component({
  selector: 'app-root',
  imports: [OriginLayout, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'brief-contact-a';
  personne = TEAM_MEMBERS;
}