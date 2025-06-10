// src/app/profile-page/profile-page.ts
import { CommonModule } from '@angular/common';
import TEAM_MEMBERS from '../data/profil.json';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; // <-- AJOUTEZ ActivatedRoute ET ParamMap ici !

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
  // Si ce composant est déclaré dans un NgModule, RETIREZ 'standalone: true'
  // Si CommonModule est déjà fourni par BrowserModule via AppModule, RETIREZ 'imports: [CommonModule]'
  templateUrl: './profile-page.html',
  styleUrls: ['./profile-page.css'],
})
export class ProfilePage implements OnInit {
  member: TeamMember | null = null;
  profileNotFound: boolean = false;

  constructor(private route: ActivatedRoute) {
    // Le constructeur est l'endroit pour les injections de dépendances.
    // Laissez-le simple.
  }

  ngOnInit(): void {
    this.profileNotFound = false;

    this.route.paramMap.subscribe((params: ParamMap) => {
      const memberName = params.get('nom');

      if (memberName) {
        this.member = TEAM_MEMBERS.find(
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