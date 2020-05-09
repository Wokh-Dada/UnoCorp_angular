import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  sevicesBlock = [
    {
      class: "first_info_blockSevices_block_three",
      title: 'Capital',
      content: 'We help organisations become fit for humans and fit for the future.',
      iconClass: "fa fa-pie-chart"
    },
    {
      class: "second_info_blockSevices_block_three",
      title: 'Consulting',
      content: 'We help organisations become fit for humans and fit for the future.',
      iconClass: "fa fa-arrow-right"
    },
    {
      class: "first_info_blockSevices_block_three mt-4 mt-md-0",
      title: 'Analitics',
      content: 'We help organisations become fit for humans and fit for the future.',
      iconClass: "fa fa-bar-chart"
    },
    {
      class: "second_info_blockSevices_block_three",
      title: 'Capital',
      content: 'We help organisations become fit for humans and fit for the future.',
      iconClass: "fa fa-line-chart"
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
