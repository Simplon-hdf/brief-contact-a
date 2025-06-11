import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Member, TeamMember } from '../member';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card implements OnInit {
  teamDisplay: TeamMember[] = [];
  selectedRole: string = 'all';  // valeur initiale sur "all"
  allMembers: TeamMember[] = [];

  constructor(private member: Member) {}

  ngOnInit() {
    this.allMembers = this.member.getAllMembers();
    this.teamDisplay = this.getRandomMembers(20, this.allMembers);
  }

  getRandomMembers(count: number, team: TeamMember[]) {
    const shuffled = [...team].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  onFilterChange() {
    if (this.selectedRole === 'all') {
      this.teamDisplay = this.getRandomMembers(20, this.allMembers);
    } else {
      this.teamDisplay = this.allMembers.filter(
        (m) => m.role.toLowerCase() === this.selectedRole.toLowerCase()
      );
    }
  }
}
