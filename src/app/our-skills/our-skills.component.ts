import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-our-skills',
  templateUrl: './our-skills.component.html',
  styleUrls: ['./our-skills.component.css']
})
export class OurSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration:2000
    });
  }

}
