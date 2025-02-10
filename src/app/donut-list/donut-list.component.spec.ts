import { Component, OnInit } from '@angular/core';
import { DonutService } from '../donut.service';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {
  donuts: any[] = []; // Store donuts here

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donutService.getDonuts().subscribe(data => {
      if (data && data.results) {
        this.donuts = data.results; // Ensure we assign API results properly
      }
    });
  }
}
