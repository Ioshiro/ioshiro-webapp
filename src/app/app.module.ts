import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentTestComponent } from './pages/component-test/component-test.component';
import { CvComponent } from './pages/cv/cv.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GeneralInfoComponent } from './ui/cv/general-info/general-info.component';
import { AlgorithmViewComponent } from './pages/projects/algorithm-view/algorithm-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentTestComponent,
    CvComponent,
    ProjectsComponent,
    GeneralInfoComponent,
    AlgorithmViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
