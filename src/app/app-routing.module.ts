import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CvComponent } from './pages/cv/cv.component';
import { ProjectsComponent } from './pages/projects/projects.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cv', component: CvComponent},
  {path: 'projects', component: ProjectsComponent, loadChildren: './pages/projects/projects.module#ProjectsModule'},
  {path: '**', redirectTo: ''} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { 

}
