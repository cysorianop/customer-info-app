import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputScreenComponent } from './input-screen/input-screen.component';
import { SummaryScreenComponent } from './summary-screen/summary-screen.component';

export const routes: Routes = [
  { path: '', component: InputScreenComponent },
  { path: 'summary', component: SummaryScreenComponent }
];

@NgModule({
  declarations: [
    InputScreenComponent,
    SummaryScreenComponent
  ],
  imports: [
    RouterModule.forRoot(routes), 
    FormsModule,
    CommonModule 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }