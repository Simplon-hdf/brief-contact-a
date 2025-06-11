import { CommonModule } from '@angular/common';
import { Member, TeamMember } from '../member';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card implements OnInit {
  teamDisplay: TeamMember[] = [];

  constructor(private member: Member) {}

  ngOnInit() {
    const allMembers = this.member.getAllMembers();
    this.teamDisplay = this.getRandomMembers(20, allMembers);
  }

  getRandomMembers(count: number, team: TeamMember[]) {
    const shuffled = [...team].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
