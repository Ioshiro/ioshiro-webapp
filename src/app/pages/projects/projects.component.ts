import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui/ui.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  title = "Projects & Stuff";
  showAlgorithms = false;
  showOther = false;

  constructor(public ui: UiService) { }

  ngOnInit() {
    this.ui.title.next(this.title);
  }

  toggleAlgorithms(){
    this.showAlgorithms = !this.showAlgorithms;
    if(this.showOther)
      this.showOther = false;
  }

  toggleOther(){
    this.showOther = !this.showOther;
    if(this.showAlgorithms)
      this.showAlgorithms = false;
  }

}
