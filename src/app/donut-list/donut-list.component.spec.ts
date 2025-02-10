import { Component, OnInit } from '@angular/core';
import { DonutService } from '../donut.service';
import { CommonModule } from '@angular/common'; // FIX: Import for *ngIf and *ngFor
import { RouterModule } from '@angular/router'; // FIX: Import for routerLink

@Component({
  selector: 'app-donut-list',
  standalone: true,
  imports: [CommonModule, RouterModule], // FIX: Ensure modules are imported
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {
  donuts: any[] = [];

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donutService.getDonuts().subscribe(data => {
      if (data && data.results) {
        this.donuts = data.results;
      }
    });
  }
}
