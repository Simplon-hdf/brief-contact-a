import { Component } from '@angular/core';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from '../search-bar/search-bar';
import { ProfilePage } from '../profile-page/profile-page';
import { Card } from '../card/card';
import { Formulaire } from '../formulaire/formulaire';


@Component({
  selector: 'app-origin-layout',
  imports: [Header, RouterOutlet, ProfilePage, SearchBar, Card, Formulaire],
  templateUrl: './origin-layout.html',
  styleUrls: ['./origin-layout.css']
})
export class OriginLayout {

}
