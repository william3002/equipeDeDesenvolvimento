import { Component, Input, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  @Input()
  personPhoto?: string

  @Input()
  personTitle?: string;

  @Input()
  personSubTitle?: string

  @Input()
  personDescription?: string

  @Input()
  personColorFundoImg?: string

  @Input()
  personColorFundo?: string

 }
