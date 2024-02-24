import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.scss'
})
export class TwoWayComponent {
public name="hujaifa";
}
