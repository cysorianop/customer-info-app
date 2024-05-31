import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-screen',
  templateUrl: './input-screen.component.html',
  styleUrls: ['./input-screen.component.css']
})
export class InputScreenComponent  {
  documentType: string = '';
  documentNumber: string = '';
  isFormValid: boolean = false;

  constructor(private router: Router) { }

  checkFormValidity() {
    // isFormValid se establece en true si documentType tiene un valor y documentNumber es válido
    this.isFormValid = !!this.documentType && this.isValidDocumentNumber();
  }

  isValidDocumentNumber(): boolean {
    const num = this.documentNumber.replace(/\D/g, ''); // Eliminar separadores de miles
    return num.length >= 8 && num.length <= 11;
  }

  formatDocumentNumber() {
    let num = this.documentNumber.replace(/\D/g, ''); // Eliminar caracteres no numéricos
    if (num.length > 11) num = num.slice(0, 11); // Limitar a 11 caracteres
    this.documentNumber = num.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Agregar separadores de miles
  }

  searchCustomer() {
    if (this.isFormValid) {
      this.router.navigate(['/summary'], { queryParams: { type: this.documentType, number: this.documentNumber.replace(/\D/g, '') } });
    }
  }
}