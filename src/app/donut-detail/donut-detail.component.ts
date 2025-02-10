import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DonutService } from '../donut.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donut-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {
  donut: any;
  private route = inject(ActivatedRoute);
  private donutService = inject(DonutService);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id) || id < 1) {
      console.error('Invalid donut ID');
      return;
    }

    this.donutService.getDonutById(id).subscribe({
      next: (data: any) => this.donut = data,
      error: (err: any) => console.error('Failed to fetch donut details', err)
    });
  }

  addToCart(): void {
    if (!this.donut) {
      console.error('No donut selected');
      return;
    }
    this.donutService.addToCart(this.donut);
  }
}
