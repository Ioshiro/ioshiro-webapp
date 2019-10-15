import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Home";

  constructor(public ui: UiService) { }

  ngOnInit() {
    this.ui.title.next(this.title);
    console.log("setto: "+ this.title);
  }

}
