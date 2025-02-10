import { Component, OnInit } from '@angular/core';
import { DonutService } from '../donut.service';
import { CommonModule } from '@angular/common'; // FIX: Import CommonModule for *ngIf and *ngFor
import { RouterModule } from '@angular/router'; // FIX: Import RouterModule for routerLink

@Component({
  selector: 'app-donut-list',
  standalone: true, // FIX: Mark as standalone component
  imports: [CommonModule, RouterModule], // FIX: Import required modules
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {
  donuts: any[] = []; // Store fetched donuts here

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donutService.getDonuts().subscribe(data => {
      if (data && data.results) {
        this.donuts = data.results; // Store the fetched donut data
      }
    });
  }
}
