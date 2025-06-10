import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Card } from '../card/card';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-origin-layout',
  imports: [Header, RouterOutlet, Card],
  templateUrl: './origin-layout.html',
  styleUrl: './origin-layout.css',
})
export class OriginLayout {}