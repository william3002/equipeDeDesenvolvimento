import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  cardTitle: string = '';

  @Input()
  cardDescription: string = '';

  @Input()
  cardPhoto: string = '';

  @Input()
  cardColor: string = '';

  @Input()
  id: string = ""

}
