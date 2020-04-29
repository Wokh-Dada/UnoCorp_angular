import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  itemBlocks = [
    {
      title: 'Strategy',
      content: 'We\'re a consulting group that empowers businesses',
      iconClass: "fa fa-free-code-camp"
    },
    {
      title: 'Operations',
      content: 'We help organisations become fit for humans and fit for the future.',
      iconClass: "fa fa-openid"
    },
    {
      title: 'Leadership',
      content: 'We help organisations become fit for humans and fit for the future.',
      iconClass: "fa fa-briefcase"
    },
    {
      title: 'Efficiency',
      content: 'We help organisations become fit for humans and fit for the future.',
      iconClass: "fa fa-cogs"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
