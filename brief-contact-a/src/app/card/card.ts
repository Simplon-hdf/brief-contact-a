import { CommonModule } from '@angular/common';
import TEAM_MEMBERS from '../data/profil.json';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface TeamMember {
  nom: string;
  job: string;
  email: string;
  phone: string;
  role: string;
  image: string;
  about?: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card implements OnInit {
  allMembers: TeamMember[] = [];
  members: TeamMember[] = [];
  selectedRole: string = 'all';

  ngOnInit() {
    this.allMembers = TEAM_MEMBERS;
    this.filterMembers();
  }

  onFilterChange(): void {
    this.filterMembers();
  }

  filterMembers(): void {
    if (this.selectedRole === 'all') {
      this.members = [...this.allMembers];
    } else {
      this.members = this.allMembers.filter(
        member => member.role.toLowerCase() === this.selectedRole.toLowerCase()
      );
    }
  }
}