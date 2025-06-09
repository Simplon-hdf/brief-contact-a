import { CommonModule } from '@angular/common';
import { TEAM_MEMBERS } from '../data/personne.data';
import { Component } from '@angular/core';
interface TeamMember {
  nom: string;
  role: string;
  email: string;
  phone: string;
  image: string;
}
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class Card {
  team = TEAM_MEMBERS;
 teamDisplay: TeamMember[] = [];

 ngOnInit() {
   this.teamDisplay = this.getRandomMembers(4);
 }

 getRandomMembers(count: number) {
   const shuffled = [...this.team].sort(() => 0.5 - Math.random());
   return shuffled.slice(0, count);
 }
}
