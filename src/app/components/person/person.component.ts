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
  personPhoto: string = ''

  @Input()
  personTitle: string = ''

  @Input()
  personSubTitle: string = ''

  @Input()
  personDescription: string = ''

  @Input()
  personColorFundoImg: string = ''

  @Input()
  personColorFundo: string = ''

  @Input()
  id: string = "0"

  // persons: any[] = [
  //   {
  //     id: '1',
  //     nome: 'Liam Novak',
  //     cargo: 'Software Engineer',
  //     description: 'Liam Novak sempre foi apaixonado por tecnologia...',
  //     image: 'images/person_1.png'
  //   },
  //   {
  //     id: '2',
  //     nome: 'Sophia Moretti',
  //     cargo: 'Business Development Manager',
  //     description: 'Sophia Moretti é uma talentosa Business Development Manager...',
  //     image: 'images/person_2.png'
  //   },
  //   {
  //     id: '3',
  //     nome: 'Ethan Rossi',
  //     cargo: 'Business Development Manager',
  //     description: 'Ethan Rossi sempre teve uma paixão por negócios...',
  //     image: 'images/person_3.png'
  //   },
  //   {
  //     id: '4',
  //     nome: 'Isabella Ricci',
  //     cargo: 'UX Designer',
  //     description: 'Isabella Ricci sempre teve uma paixão por design e tecnologia...',
  //     image: 'images/person_4.png'
  //   },
  //   {
  //     id: '5',
  //     nome: 'Noah Conti',
  //     cargo: 'Content Creator',
  //     description: 'Noah Conti sempre teve um dom natural para contar histórias...',
  //     image: 'images/person_5.png'
  //   }
  // ];
}
