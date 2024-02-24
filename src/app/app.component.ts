import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { ParentComponent } from './parent/parent.component';
import { FooterComponent } from './footer/footer.component';
import { StudentComponent } from './student/student.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,UserComponent,EventComponent,TwoWayComponent,ParentComponent,FooterComponent,
    StudentComponent,LifeCycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
 
}
