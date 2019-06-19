import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.css']
})
export class FormControlsComponent implements OnInit {
  // For CheckBox
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
