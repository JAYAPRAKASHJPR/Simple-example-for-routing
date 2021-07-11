import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  ErrorComponent,
  HelloComponent,
  HiComponent,
  TestComponent
} from './hello.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
    children: [{ path: 'hellochild', component: HiComponent }]
  },
  { path: 'hi', component: HiComponent },
  { path: 'test', component: TestComponent },
  { path: 'Page', component: ErrorComponent },
  { path: '', component: TestComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'Page' }
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HelloComponent, TestComponent, HiComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
