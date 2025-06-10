import { Component } from '@angular/core';

@Component({
  selector: 'app-add-form',
  imports: [],
  templateUrl: './add-form.html',
  styleUrl: './add-form.css',
})
export class AddForm {
  constructor() {}

  imagePreview: string =
    'https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c';

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.imagePreview = URL.createObjectURL(file);
    }
  }
}
