import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutService } from '../donut.service';
import { CommonModule } from '@angular/common'; // FIX: Import CommonModule for *ngIf

@Component({
  selector: 'app-donut-detail',
  standalone: true, // FIX: Mark as standalone
  imports: [CommonModule], // FIX: Import required modules
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {
  donut: any;

  constructor(private route: ActivatedRoute, private donutService: DonutService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.donutService.getDonutById(id).subscribe(data => {
      this.donut = data;
    });
  }

  addToCart(): void {
    this.donutService.addToCart(this.donut);
  }
}
