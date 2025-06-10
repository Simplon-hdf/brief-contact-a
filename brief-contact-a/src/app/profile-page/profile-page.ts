import { CommonModule } from '@angular/common';
import TEAM_MEMBERS from '../data/profil.json';
import { Component, OnInit } from '@angular/core';

interface TeamMember {
  nom?: string;
  job?: string;
  email?: string;
  phone?: string;
  role?: string;
  image?: string;
  about?: string;
}

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-page.html',
  styleUrls: ['./profile-page.css'],
})
export class ProfilePage implements OnInit {
  member: TeamMember | null = null;

  constructor() {
    this.member = TEAM_MEMBERS[0];
  }

  ngOnInit(): void {
    this.member = TEAM_MEMBERS[0];
  }
}
