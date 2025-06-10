import { Component } from '@angular/core';
import { OriginLayout } from './origin-layout/origin-layout';
import { Card } from './card/card';
import { TEAM_MEMBERS } from './data/personne.data';
import { Footer } from './footer/footer';



@Component({
  selector: 'app-root',
  imports: [OriginLayout, Footer, Card],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'brief-contact-a';
  personne = TEAM_MEMBERS;
}