import { Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/_helper/animation';

@Component({
  selector: 'app-horizontal-navbar',
  templateUrl: './horizontal-navbar.component.html',
  styleUrls: ['./horizontal-navbar.component.scss'],
  animations : [fadeInOut]
})
export class HorizontalNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
