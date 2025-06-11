import { Component } from '@angular/core';
import { Member, TeamMember } from '../member';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-form',
  imports: [CommonModule],
  templateUrl: './add-form.html',
  styleUrl: './add-form.css',
})
export class AddForm {
  constructor(private member: Member) {}

  imagePreview: string =
    'https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c';

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.imagePreview = URL.createObjectURL(file);
    }
  }

  onSubmit(
    nom: string,
    phone: string,
    email: string,
    job: string,
    role: string,
    about: string
  ) { 
    
    const newMember: TeamMember = {
      nom: nom,
      job: job,
      email: email,
      phone: phone,
      role: role,
      about: about,
      image: this.imagePreview,
    };

    this.member.addMember(newMember);
    console.log('Membre ajouté !', newMember);
  }
}
