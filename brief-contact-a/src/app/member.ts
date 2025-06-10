import { Injectable } from '@angular/core';
import { TEAM_MEMBERS } from './data/personne.data';

export interface TeamMember {
  id?: number;
  nom: string;
  job: string;
  email: string;
  phone: string;
  role: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class Member {
  constructor() {}
  private team: TeamMember[] = [...TEAM_MEMBERS];

  getAllMembers(): TeamMember[] {
    return this.team;
  }

  addMember(newMember: TeamMember) {
    const newId = this.team.length + 1;
    newMember.id = newId;

    this.team.push(newMember);
  }
}
