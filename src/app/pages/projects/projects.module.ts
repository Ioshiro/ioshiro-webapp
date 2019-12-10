import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule, ProjectRoutes } from './projects-routing.module'
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';
import { ProjectsComponent } from './projects.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlgorithmViewComponent } from './algorithm-view/algorithm-view.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';



@NgModule({
    declarations: [
        MergeSortComponent,
        SelectionSortComponent,
        InsertionSortComponent,
        AlgorithmViewComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ProjectRoutes)
    ],
    exports: [
    ]
  })
  export class ProjectsModule { }
  