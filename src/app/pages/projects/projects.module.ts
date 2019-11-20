import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule, ProjectRoutes } from './projects-routing.module'
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { ProjectsComponent } from './projects.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        MergeSortComponent,
        //ProjectsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ProjectRoutes)
    ],
    exports: [
        //MergeSortComponent
    ]
  })
  export class ProjectsModule { }
  