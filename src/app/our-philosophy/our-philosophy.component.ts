import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-our-philosophy',
  templateUrl: './our-philosophy.component.html',
  styleUrls: ['./our-philosophy.component.css']
})
export class OurPhilosophyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration:3000
    });
  }

}
