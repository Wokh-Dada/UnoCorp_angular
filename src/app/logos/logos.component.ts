import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent implements OnInit {
  logoscr = [
    {logoclass: "first_logo_logos_block"},
    {logoclass: "second_logo_logos_block"},
    {logoclass: "third_logo_logos_block"},
    {logoclass: "fourth_logo_logos_block"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
