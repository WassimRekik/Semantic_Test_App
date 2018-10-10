import { Component } from '@angular/core';
import {User} from "./user/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first_step_active = true;
  user: User;
  return_button(){
    this.first_step_active = true;
  }
}
