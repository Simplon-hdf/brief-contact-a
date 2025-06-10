import { Component } from '@angular/core';
import { OriginLayout } from './origin-layout/origin-layout';
import TEAM_MEMBERS from './data/profil.json';  
import { Footer } from './footer/footer';
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [OriginLayout, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'brief-contact-a';
  personne = TEAM_MEMBERS;
}
