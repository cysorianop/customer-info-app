import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-summary-screen',
  templateUrl: './summary-screen.component.html',
  styleUrls: ['./summary-screen.component.css']
})
export class SummaryScreenComponent implements OnInit {
  customer: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const type = params['type'];
      const number = params['number'];
      this.fetchCustomerData(type, number);
    });
  }

  fetchCustomerData(type: string, number: string) {
    if (type === 'C' && number === '23445322') {
      this.customer = {
        firstName: "Juan",
        middleName: "Carlos",
        lastName: "Perez",
        secondLastName: "Gomez",
        phone: "123456789",
        address: "Calle 123 #45-67",
        city: "Bogotá"
      };
    } else {
      this.customer = null;
      alert('Cliente no encontrado');
      this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
