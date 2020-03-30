import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MergeSortComponent } from "./algorithms/merge-sort/merge-sort.component";
import { AlgorithmViewComponent } from '../../ui/projects/algorithm-view/algorithm-view.component';
import { SelectionSortComponent } from './algorithms/selection-sort/selection-sort.component';
import { InsertionSortComponent } from './algorithms/insertion-sort/insertion-sort.component';
import { CountingSortComponent } from './algorithms/counting-sort/counting-sort.component';



export const ProjectRoutes: Routes = [
  {path: 'app-algortihm-view', component: AlgorithmViewComponent},
  {path: 'merge-sort', component: MergeSortComponent, outlet: "projectBox"},
  {path: 'selection-sort', component: SelectionSortComponent, outlet: "projectBox"},
  {path: 'insertion-sort', component: InsertionSortComponent, outlet: "projectBox"},
  {path: 'counting-sort', component: CountingSortComponent, outlet: "projectBox"}
];

@NgModule({
  imports: [RouterModule.forChild(ProjectRoutes)],
  exports: [RouterModule]
  
})

export class ProjectsRoutingModule { 

}
