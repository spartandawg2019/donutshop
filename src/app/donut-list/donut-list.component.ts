import { Component, OnInit } from '@angular/core';
import { DonutService } from '../donut.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-donut-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {
  donuts: any[] = [];

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donutService.getDonuts().subscribe({
      next: (data: any) => {
        console.log('Fetched Donuts:', data); // ✅ FIX: Debugging log
        if (data && data.results) {
          this.donuts = data.results;
        }
      },
      error: (err: any) => console.error('Error fetching donuts', err)
    });
  }
}
