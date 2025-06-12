import { Injectable } from '@angular/core';
import TEAM_MEMBERS from './data/profil.json';

export interface TeamMember {
  id?: number;
  nom: string;
  job: string;
  email: string;
  phone: string;
  role: string;
  image: string;
  about: string;
}

@Injectable({
  providedIn: 'root',
})
export class Member {
  private team: TeamMember[] = [...TEAM_MEMBERS];

  getAllMembers(): TeamMember[] {
    return this.team;
  }

  addMember(newMember: TeamMember) {
    const newId = this.team.length + 1;
    newMember.id = newId;
    this.team.push(newMember);
    this.saveToStorage();
  }
  
  
  constructor() {
    this.loadFromStorage();
  }
  
  private loadFromStorage() {
    const data = localStorage.getItem('teamMembers');
  
    if (data) {
      this.team = JSON.parse(data);
    } else {
      this.team = [...TEAM_MEMBERS];
      this.saveToStorage();
    }
  }
  
  private saveToStorage() {
    const jsonData = JSON.stringify(this.team);
    localStorage.setItem('teamMembers', jsonData);
  }
}
