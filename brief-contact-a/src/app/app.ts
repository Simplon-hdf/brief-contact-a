import { Component } from '@angular/core';
import { OriginLayout } from './origin-layout/origin-layout';

@Component({
  selector: 'app-root',
  imports: [OriginLayout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'brief-contact-a';
}
