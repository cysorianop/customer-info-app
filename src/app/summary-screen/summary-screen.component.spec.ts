// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { SummaryScreenComponent } from './summary-screen.component';
// import { ActivatedRoute, Router } from '@angular/router';
// import { of } from 'rxjs';

// describe('SummaryScreenComponent', () => {
//   let component: SummaryScreenComponent;
//   let fixture: ComponentFixture<SummaryScreenComponent>;

//   const mockActivatedRoute = {
//     queryParams: of({ type: 'C', number: '23445322' })
//   };

//   const mockRouter = {
//     navigate: jasmine.createSpy('navigate')
//   };

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ SummaryScreenComponent ],
//       providers: [
//         { provide: ActivatedRoute, useValue: mockActivatedRoute },
//         { provide: Router, useValue: mockRouter }
//       ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SummaryScreenComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   // it('should fetch customer data and populate customer object', () => {
//   //   expect(component.customer).toEqual({
//   //     firstName: "Juan",
//   //     middleName: "Carlos",
//   //     lastName: "Perez",
//   //     secondLastName: "Gomez",
//   //     phone: "123456789",
//   //     address: "Calle 123 #45-67",
//   //     city: "Bogotá"
//   //   });
//   // });

//   // it('should navigate to home screen when no customer found', () => {
//   //   spyOn(window, 'alert');
//   //   const noCustomerActivatedRoute = {
//   //     queryParams: of({ type: 'X', number: '12345678' })
//   //   };
//   //   TestBed.overrideProvider(ActivatedRoute, { useValue: noCustomerActivatedRoute });
//   //   fixture = TestBed.createComponent(SummaryScreenComponent);
//   //   component = fixture.componentInstance;
//   //   fixture.detectChanges();
//   //   expect(window.alert).toHaveBeenCalledWith('Cliente no encontrado');
//   //   expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
//   // });

//   // it('should navigate to home screen when goBack method is called', () => {
//   //   component.goBack();
//   //   expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
//   // });

//    it('should create', () => {
//     expect(component).toBeDefined();
//   });
// });
