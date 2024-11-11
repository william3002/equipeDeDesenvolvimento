import { Component } from '@angular/core';
import { PersonComponent } from "../../components/person/person.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [PersonComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  private id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');  // Obtenha o ID da rota
    this.route.paramMap.subscribe(value => this.id = (value.get("id")))
    console.log(this.id); // Use o ID para carregar dados específicos, se necessário
  }

  
}
