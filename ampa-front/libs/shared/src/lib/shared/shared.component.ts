import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule, ClrVerticalNav } from '@clr/angular';

@Component({
  selector: 'lib-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css',

})
export class SharedComponent {}
