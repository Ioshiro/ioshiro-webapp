import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MergeSortComponent } from "./merge-sort/merge-sort.component";


export const ProjectRoutes: Routes = [
  {path: 'merge-sort', component: MergeSortComponent, outlet: "projectBox"},
];

@NgModule({
  imports: [RouterModule.forChild(ProjectRoutes)],
  exports: [RouterModule]
  
})

export class ProjectsRoutingModule { 

}
