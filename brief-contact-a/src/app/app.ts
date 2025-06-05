import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from './search-bar/search-bar';
import { Header } from './header/header';
import { ProfilePage } from './profile-page/profile-page';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SearchBar, Card, ProfilePage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'brief-contact-a';
}
