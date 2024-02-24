import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnInit, AfterContentInit, AfterViewInit, DoCheck, AfterContentChecked, AfterViewChecked, OnDestroy{
  public title = 'Life cycle componet';
  public name = '';
  ngOnInit(): void {
    console.log('on init');
  }

  ngDoCheck(): void {
    console.log('do check');
  }

  ngAfterContentInit(): void {
    console.log('on after content init');
  }

  ngAfterContentChecked(): void {
    console.log('on after content checked');
  }

  ngAfterViewInit(): void {
    console.log('after view init');
  }

  ngAfterViewChecked(): void {
    console.log('after view checked');
  }

  ngOnDestroy(): void {
    console.log('on desroy');
  }
}