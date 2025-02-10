import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DonutService } from './donut.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartCount: number = 0;
  private donutService = inject(DonutService);

  ngOnInit(): void {
    this.donutService.getCart().subscribe(cart => {
      this.cartCount = cart.length;
    });
  }
}
