import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  leftSection=[
    {title: "What we do", subtitle: "We are in the business of helping"},
    {title: "How we do", subtitle: "Creating sustainable change and transformation"},
    {title: "Who we are", subtitle: "Better equipped for creating a better future"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
