import { Component } from '@angular/core';
import { PersonComponent } from "../../components/person/person.component";
import { ActivatedRoute } from '@angular/router';
import { membersInterface } from '../../interface/members';
import person from '../../person.json'
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [PersonComponent, CardComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  private id: number | null = null;
  member?: membersInterface;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe(value => this.id = (value.get("id")))
    this.getMember()

  }

  getMember(){
    const id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(id);
    person.forEach((member)=>{
      if(member.id === id){
        this.member = member
      }
    })
    console.log(this.member)
  }


}
