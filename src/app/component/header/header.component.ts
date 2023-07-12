import { Component,ViewEncapsulation } from '@angular/core';
// import {FormsModule} from '@angular/forms';
// import {MatInputModule} from '@angular/material/input';
// import {NgFor} from '@angular/common';
// import {MatSelectModule} from '@angular/material/select';
// import {MatFormFieldModule} from '@angular/material/form-field';

// interface Item {
//   value?: string;
//   viewValue?: string;
// }

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
  // standalone: true,
  // imports: [ ReactiveFormsModule ]

})
export class HeaderComponent {
  // items: Item[] = [
  //   {value: 'EN', viewValue: 'EN'},
  //   {value: 'RU', viewValue: 'RU'}
  // ]
  selected = 'EN'
}
