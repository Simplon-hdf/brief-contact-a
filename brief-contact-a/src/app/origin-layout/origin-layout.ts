import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-origin-layout',
  imports: [Header, RouterOutlet],
  templateUrl: './origin-layout.html',
  styleUrl: './origin-layout.css',
})
export class OriginLayout {}