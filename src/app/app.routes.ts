import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { NgModule } from '@angular/core';
import { CoringaComponent } from './pages/coringa/coringa.component';

export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'content/:id', component: ContentComponent},
  {path:'**', component: CoringaComponent}
];

// Liam, Sophia, Ethan, Isabella, Noah
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
