import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { PersonComponent } from '../../components/person/person.component';
import { membersInterface } from '../../interface/members';
import person from '../../person.json'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, PersonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  members: membersInterface[] = person

  ngOnInit(): void {
   console.log(this.members)
  }
}
