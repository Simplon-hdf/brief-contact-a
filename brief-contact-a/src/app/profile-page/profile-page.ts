import { CommonModule } from '@angular/common';
import TEAM_MEMBERS from '../data/profil.json';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Member } from '../member';

interface TeamMember {
  nom?: string;
  job?: string;
  email?: string;
  phone?: string;
  role?: string;
  image?: string;
  about?: string;
  skills?: string[];
}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.html',
  styleUrls: ['./profile-page.css'],
})
export class ProfilePage implements OnInit {
  member: TeamMember | null = null;
  profileNotFound: boolean = false;

  constructor(private route: ActivatedRoute, private memberService: Member) {
    
  }

  ngOnInit(): void {
    this.profileNotFound = false;

    this.route.paramMap.subscribe((params: ParamMap) => {
      const memberName = params.get('nom');

      if (memberName) {
        this.member = this.memberService.getAllMembers().find(
          (m) => m.nom?.toLowerCase() === memberName.toLowerCase()
        ) || null;

        if (!this.member) {
          this.profileNotFound = true;
          this.member = {
            nom: 'Profil Introuvable',
            job: 'Désolé',
            about: `Aucun profil trouvé pour "${memberName}". Veuillez vérifier le nom.`,
            image: 'https://via.placeholder.com/300/CCCCCC/FFFFFF?text=Profil+Non+Trouvé',
          };
        }
      } else {
        this.profileNotFound = true;
        this.member = {
          nom: 'Accès Invalide',
          job: 'Erreur',
          about: 'Veuillez sélectionner un profil via une carte ou fournir un nom valide.',
          image: 'https://via.placeholder.com/300/CCCCCC/FFFFFF?text=Accès+Invalide',
        };
      }
    });
  }
}