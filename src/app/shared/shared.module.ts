import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';



@NgModule({
  declarations: [
    ErrorPageComponent,
    Error404PageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorPageComponent
  ]
})
export class SharedModule { }
