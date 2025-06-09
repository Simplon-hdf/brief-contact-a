import { Component, OnInit } from '@angular/core';
import { TEAM_MEMBERS } from '../data/personne.data'; // adapte le chemin si besoin

interface TeamMember {
  nom: string;
  role: string;
  email: string;
  phone: string;
  image: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.html',
  styleUrls: ['./team.css']
})
export class TeamComponent implements OnInit {
  team = TEAM_MEMBERS;  // la liste complète
  teamDisplay: TeamMember[] = [];  // la liste aléatoire affichée

  ngOnInit() {
    this.teamDisplay = this.getRandomMembers(4);
  }

  getRandomMembers(count: number): TeamMember[] {
    // Mélange le tableau (copie) de manière aléatoire
    const shuffled = [...this.team].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
}
