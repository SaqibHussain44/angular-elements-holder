import { Component, forwardRef, Input, OnInit,ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder, Validators } from '@angular/forms';
import '../assets/app-email-element';
import '../assets/app-phone-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  options = { email: '', type:'', isRequired: false, isPrimary: false, label: 'This is label', types: [{name: 'Home', value: 'home'}, {name: 'Personal', value: 'personal'}, {name: 'Other', value: 'other'}],
   isValid: -1
  };

    options1 = { phone: '', type:'', isRequired: false, isCanadian: false, label: 'This is label', types: [{name: 'Home', value: 'home'}, {name: 'Personal', value: 'personal'}, {name: 'Other', value: 'other'}],
   isValid: -1
  };
    constructor() {}
  getValue(form) {
      console.log("Outside Component", this.name, this.options)
  }

}
