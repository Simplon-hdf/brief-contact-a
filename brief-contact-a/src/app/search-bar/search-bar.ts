import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Member, TeamMember } from '../member';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar implements OnInit {
  allMembers: TeamMember[] = [];
  searchResults: TeamMember[] = [];
  searchTerm: string = '';

  constructor(private member: Member, private router: Router) {}

  ngOnInit(): void {
    this.allMembers = this.member.getAllMembers();
    this.searchResults = [];
  }

  goToProfile(memberName: string) {
    this.router.navigate(['/profile', memberName]);
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value;

    if (this.searchTerm === '') {
      this.searchResults = [];
    } else {
      this.searchResults = this.allMembers.filter(
        (member) =>
          member.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          member.job.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    console.log('Résultats:', this.searchResults);
  }
}
