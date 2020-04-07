import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-follow-us',
  templateUrl: './follow-us.component.html',
  styleUrls: ['./follow-us.component.css']
})
export class FollowUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration:2500
    });
  }

}
