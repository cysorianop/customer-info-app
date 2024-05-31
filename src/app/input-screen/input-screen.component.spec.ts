import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputScreenComponent } from './input-screen.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('InputScreenComponent', () => {
  let component: InputScreenComponent;
  let fixture: ComponentFixture<InputScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputScreenComponent ],
      imports: [ RouterTestingModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button when form is invalid', () => {
    component.documentType = 'C';
    component.documentNumber = '123';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
  });

  // it('should enable button when form is valid', () => {
  //   component.documentType = 'C';
  //   component.documentNumber = '12345678';
  //   fixture.detectChanges();
  //   const button = fixture.nativeElement.querySelector('button');
  //   expect(button.disabled).toBe(false);
  // });
});