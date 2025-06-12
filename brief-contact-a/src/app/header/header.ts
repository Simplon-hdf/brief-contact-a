import { Component } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [SearchBar, RouterLink, RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
