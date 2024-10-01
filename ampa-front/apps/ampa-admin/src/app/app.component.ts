import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { BrowserModule } from "@angular/platform-browser";
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '@ampa-front/shared';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[ClarityModule,  RouterModule, RouterOutlet, CommonModule,
    HttpClientModule , NavigationComponent]
})
export class AppComponent {
  title = 'ampa-admin';

  constructor(){
    //console.log('WEB AMPA');
  }
}
