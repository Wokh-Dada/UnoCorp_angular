import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  menu = [
    {
      nameLink: "Home",
      complited: true,
      popup: [
        {popupItemName: "Homepage Main", complited: false},
        {popupItemName: "Homepage Finance", complited: true},
        {popupItemName: "Homepage App", complited: false},
        {popupItemName: "Homepage Startup", complited: false},
        {popupItemName: "Homepage Business", complited: false},
        {popupItemName: "Homepage SaaS", complited: false},
        {popupItemName: "Homepage Portfolio", complited: false},
        {popupItemName: "Homepage Consulting", complited: false},
        {popupItemName: "Homepage Cprporate", complited: false}

      ]
    },
    {nameLink: "About", complited: false},
    {nameLink: "Services", complited: false},
    {nameLink: "Pricing", complited: false},
    {nameLink: "Blog", complited: false}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
