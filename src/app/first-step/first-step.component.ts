import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {User} from "../user/user";
@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {

  @Input() first_step_active: boolean;
  @Output() first_step_activeChange = new EventEmitter<boolean>();
  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();
  registerForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.user = new User();
    this.user.email = this.registerForm.controls['email'].value;
    this.user.password = this.registerForm.controls['password'].value;
    this.userChange.emit(this.user);
    this.first_step_activeChange.emit(false);
  }
}
