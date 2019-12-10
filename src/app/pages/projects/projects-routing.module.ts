import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MergeSortComponent } from "./merge-sort/merge-sort.component";
import { AlgorithmViewComponent } from './algorithm-view/algorithm-view.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';




export const ProjectRoutes: Routes = [
  {path: 'merge-sort', component: MergeSortComponent, outlet: "projectBox"},
  {path: 'app-algortihm-view', component: AlgorithmViewComponent},
  {path: 'selection-sort', component: SelectionSortComponent, outlet: "projectBox"},
  {path: 'insertion-sort', component: InsertionSortComponent, outlet: "projectBox"}
];

@NgModule({
  imports: [RouterModule.forChild(ProjectRoutes)],
  exports: [RouterModule]
  
})

export class ProjectsRoutingModule { 

}
