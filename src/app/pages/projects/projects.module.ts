import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectRoutes } from './projects-routing.module';
import { AlgorithmViewComponent } from '../../ui/projects/algorithm-view/algorithm-view.component';
import { InsertionSortComponent } from './algorithms/insertion-sort/insertion-sort.component';
import { CountingSortComponent } from './algorithms/counting-sort/counting-sort.component';
import { MergeSortComponent } from './algorithms/merge-sort/merge-sort.component';
import { SelectionSortComponent } from './algorithms/selection-sort/selection-sort.component';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 

@NgModule({
    declarations: [
        AlgorithmViewComponent,
        MergeSortComponent,
        SelectionSortComponent,
        InsertionSortComponent,
        CountingSortComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        RouterModule.forChild(ProjectRoutes)
    ],
    exports: [
    ]
  })
  export class ProjectsModule { }
  