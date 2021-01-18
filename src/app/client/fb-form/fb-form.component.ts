import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fb-form',
  templateUrl: './fb-form.component.html',
  styleUrls: ['./fb-form.component.scss']
})
export class FbFormComponent implements OnInit {
  profileForm;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });
  }

}
