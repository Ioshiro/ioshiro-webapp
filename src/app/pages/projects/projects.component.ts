import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui/ui.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  title = "Projects & Stuff";

  constructor(public ui: UiService) { }

  ngOnInit() {
    this.ui.setTitle(this.title);
  }

}
