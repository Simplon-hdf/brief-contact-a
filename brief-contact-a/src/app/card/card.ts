import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEAM_MEMBERS } from '../data/personne.data';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class Card {
 team = TEAM_MEMBERS;
}
